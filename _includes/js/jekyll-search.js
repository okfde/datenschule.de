(function e(t, n, r) {
	function s(o, u) {
		if (!n[o]) {
			if (!t[o]) {
				var a = typeof require == "function" && require;
				if (!u && a)return a(o, !0);
				if (i)return i(o, !0);
				throw new Error("Cannot find module '" + o + "'")
			}
			var f = n[o] = {exports: {}};
			t[o][0].call(f.exports, function (e) {
				var n = t[o][1][e];
				return s(n ? n : e)
			}, f, f.exports, e, t, n, r)
		}
		return n[o].exports
	}

	var i = typeof require == "function" && require;
	for (var o = 0; o < r.length; o++)s(r[o]);
	return s
})({
	1: [function (require, module, exports) {
		'use strict';

		function fuzzysearch(needle, haystack) {
			var tlen = haystack.length;
			var qlen = needle.length;
			if (qlen > tlen) {
				return -1;
			}
			if (qlen === tlen) {
				return needle === haystack;
			}
			var r = -1;
			outer: for (var i = 0, j = 0; i < qlen; i++) {
				var nch = needle.charCodeAt(i);
				while (j < tlen) {
					if (haystack.charCodeAt(j++) === nch) {
						r = j;
						continue outer;
					}
				}
				return -1;
			}
			return r;
		}

		module.exports = fuzzysearch;

	}, {}], 2: [function (require, module, exports) {
		'use strict'
		module.exports = {
			load: load
		}

		function load(location, callback) {
			var xhr = getXHR()
			xhr.open('GET', location, true)
			xhr.onreadystatechange = createStateChangeListener(xhr, callback)
			xhr.send()
		}

		function createStateChangeListener(xhr, callback) {
			return function () {
				if (xhr.readyState === 4 && xhr.status === 200) {
					try {
						callback(null, JSON.parse(xhr.responseText))
					} catch (err) {
						callback(err, null)
					}
				}
			}
		}

		function getXHR() {
			return (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP')
		}

	}, {}], 3: [function (require, module, exports) {
		'use strict'
		module.exports = function OptionsValidator(params) {
			if (!validateParams(params)) {
				throw new Error('-- OptionsValidator: required options missing')
			}
			if (!(this instanceof OptionsValidator)) {
				return new OptionsValidator(params)
			}

			var requiredOptions = params.required

			this.getRequiredOptions = function () {
				return requiredOptions
			}

			this.validate = function (parameters) {
				var errors = []
				requiredOptions.forEach(function (requiredOptionName) {
					if (parameters[requiredOptionName] === undefined) {
						errors.push(requiredOptionName)
					}
				})
				return errors
			}

			function validateParams(params) {
				if (!params) {
					return false
				}
				return params.required !== undefined && params.required instanceof Array
			}
		}
	}, {}], 4: [function (require, module, exports) {
		'use strict'
		module.exports = {
			put: put,
			clear: clear,
			get: get,
			search: search,
			setOptions: setOptions
		}

		var FuzzySearchStrategy = require('./SearchStrategies/FuzzySearchStrategy')
		var LiteralSearchStrategy = require('./SearchStrategies/LiteralSearchStrategy')

		var data = []
		var opt = {}
		opt.fuzzy = false
		opt.limit = 10
		opt.searchStrategy = opt.fuzzy ? FuzzySearchStrategy : LiteralSearchStrategy


		function put(data) {
			if (isObject(data)) {
				return addObject(data);
			}
			if (isArray(data)) {
				return addArray(data);
			}
			return undefined;
		}

		function clear() {
			data.length = 0;
			return data;
		}

		function get() {
			return data;
		}


		function isObject(obj) {
			return !!obj && Object.prototype.toString.call(obj) === '[object Object]';
		}

		function isArray(obj) {
			return !!obj && Object.prototype.toString.call(obj) === '[object Array]';
		}

		function addObject(_data) {
			data.push(_data)
			return data
		}

		function addArray(_data) {
			var added = []
			for (var i = 0; i < _data.length; i++) {
				if (isObject(_data[i])) {
					added.push(addObject(_data[i]))
				}
			}
			return added
		}

		function search(crit) {
			if (!crit) {
				return []
			}
			return findMatches(data, crit, opt.searchStrategy, opt)
		}

		function setOptions(_opt) {
			opt = _opt || {};
			opt.fuzzy = _opt.fuzzy || false;
			opt.limit = _opt.limit || 10;
			opt.searchStrategy = _opt.fuzzy ? FuzzySearchStrategy : LiteralSearchStrategy;
		}

		function findMatches(data, crit, strategy, opt) {
			var matches = [];
			for (var i = 0; i < data.length && matches.length < opt.limit; i++) {
				var match = findMatchesInObject(data[i], crit, strategy, opt);
				if (match) {
					matches.push(match)
				}
			}
			return matches
		}

		function findMatchesInObject(obj, crit, strategy, opt) {
			for (var key in obj) {
				if (!isExcluded(obj[key], opt.exclude)) {
					var r = strategy.matches(obj[key], crit);
					if (r >= 0) {
						var excerpt_before = obj[key].slice(r - 40, r).trim();
						if (excerpt_before.length > 0) excerpt_before = '...' + excerpt_before;
						var excerpt_after = obj[key].slice(r + crit.length, r + crit.length + 40).trim();
						if (excerpt_after.length > 0) excerpt_after = excerpt_after + '...';
						var excerpt = obj[key].slice(r, r + crit.length);
						if (excerpt.length === 0) obj.excerpt = '';
						else obj.excerpt = excerpt_before + ' <b>' + excerpt + '</b> ' + excerpt_after;
						obj.found = opt.keyNames ? opt.keyNames[key] || key : key;
						return obj;
					}
				}
			}
		}

		function isExcluded(term, excludedTerms) {
			var excluded = false
			excludedTerms = excludedTerms || [];
			for (var i = 0; i < excludedTerms.length; i++) {
				var excludedTerm = excludedTerms[i];
				if (!excluded && new RegExp(term).test(excludedTerm)) {
					excluded = true
				}
			}
			return excluded
		}

	}, {"./SearchStrategies/FuzzySearchStrategy": 5, "./SearchStrategies/LiteralSearchStrategy": 6}], 5: [function (require, module, exports) {
		'use strict'
		var fuzzysearch = require('fuzzysearch')

		module.exports = new FuzzySearchStrategy()

		function FuzzySearchStrategy() {
			this.matches = function (string, crit) {
				return fuzzysearch(crit, string)
			}
		}

	}, {"fuzzysearch": 1}], 6: [function (require, module, exports) {
		'use strict'
		module.exports = new LiteralSearchStrategy()

		function LiteralSearchStrategy() {
			this.matches = function (string, crit) {
				if (typeof string !== 'string') {
					return false
				}
				string = string.trim();
				return string.toLowerCase().indexOf(crit.toLowerCase())
			}
		}

	}, {}], 7: [function (require, module, exports) {
		'use strict'
		module.exports = {
			compile: compile,
			setOptions: setOptions
		}

		var options = {}
		options.pattern = /\{(.*?)\}/g
		options.template = ''
		options.middleware = function () {
		}

		function setOptions(_options) {
			options.pattern = _options.pattern || options.pattern
			options.template = _options.template || options.template
			if (typeof _options.middleware === 'function') {
				options.middleware = _options.middleware
			}
		}

		function compile(data) {
			return options.template.replace(options.pattern, function (match, prop) {
				var value = options.middleware(prop, data[prop], options.template)
				if (value !== undefined) {
					return value
				}
				return data[prop] || match
			})
		}

	}, {}], 8: [function (require, module, exports) {
		;
		(function (window, document, undefined) {
			'use strict'

			var options = {
				searchInput: null,
				resultsContainer: null,
				keyNames: {},
				json: [],
				searchResultTemplate: '<li><a href="{url}" title="{desc}">{title}</a></li>',
				templateMiddleware: function () {
				},
				noResultsText: 'No results found',
				LoadingSearchText: 'Loading Search',
				limit: 10,
				fuzzy: false,
				exclude: []
			};

			var requiredOptions = ['searchInput', 'resultsContainer', 'json']

			var templater = require('./Templater');
			var repository = require('./Repository');
			var jsonLoader = require('./JSONLoader');
			var inited = false;
			var optionsValidator = require('./OptionsValidator')({
				required: requiredOptions
			})
			var utils = require('./utils')

			/*
			 Public API
			 */
			window.SimpleJekyllSearch = function SimpleJekyllSearch(_options) {
				var errors = optionsValidator.validate(_options)
				if (errors.length > 0) {
					throwError('You must specify the following required options: ' + requiredOptions)
				}
				options = utils.merge(options, _options);
				templater.setOptions({
					template: options.searchResultTemplate,
					middleware: options.templateMiddleware
				});
				repository.setOptions({
					fuzzy: options.fuzzy,
					limit: options.limit
				});
				registerInput()
			};

			// for backwards compatibility
			window.SimpleJekyllSearch.init = window.SimpleJekyllSearch

			if (typeof window.SimpleJekyllSearchInit === 'function') {
				window.SimpleJekyllSearchInit.call(this, window.SimpleJekyllSearch);
			}

			function search(query) {
				if (isValidQuery(query)) {
					render(repository.search(query));
				}
			}

			function initWithJSON(json) {
				repository.put(json)
			}

			function initWithURL(url, cb) {
				jsonLoader.load(url, function (err, json) {
					if (err) {
						throwError('failed to get JSON (' + url + ')' + err)
					}
					initWithJSON(json)
					emptyResultsContainer();
					cb();
				})
			}

			function emptyResultsContainer() {
				options.resultsContainer.innerHTML = ''
			}

			function appendToResultsContainer(text) {
				options.resultsContainer.innerHTML += text
			}

			function start(cb) {
				if (!inited) {
					inited = true;
					if (utils.isJSON(options.json)) {
						initWithJSON(options.json);
					} else {
						initWithURL(options.json, cb);
						emptyResultsContainer();
						return appendToResultsContainer(options.LoadingSearchText);
					}
				}
				cb();
			}

			function registerInput() {
				if (options.searchInput.value) {
					start(function () {
						search(options.searchInput.value);
					});
				}
				options.searchInput.addEventListener('keyup', function (e) {
					start(function () {
						var key = e.which;
						var query = e.target.value;
						if (isWhitelistedKey(key)) {
							emptyResultsContainer();
							search(query);
						}
					});
				})
			}

			function render(results) {
				if (results.length === 0) {
					return appendToResultsContainer(options.noResultsText)
				}
				for (var i = 0; i < results.length; i++) {
					results[i].found = options.keyNames[results[i].found] || results[i].found;
					appendToResultsContainer(templater.compile(results[i]))
				}
			}

			function isValidQuery(query) {
				return query && query.length > 0
			}

			function isWhitelistedKey(key) {
				return [13, 16, 20, 37, 38, 39, 40, 91].indexOf(key) === -1
			}

			function throwError(message) {
				throw new Error('SimpleJekyllSearch --- ' + message)
			}
		})(window, document);

	}, {"./JSONLoader": 2, "./OptionsValidator": 3, "./Repository": 4, "./Templater": 7, "./utils": 9}], 9: [function (require, module, exports) {
		'use strict'
		module.exports = {
			merge: merge,
			isJSON: isJSON
		};

		function merge(defaultParams, mergeParams) {
			var mergedOptions = {}
			for (var option in defaultParams) {
				mergedOptions[option] = defaultParams[option]
				if (mergeParams[option] !== undefined) {
					mergedOptions[option] = mergeParams[option]
				}
			}
			return mergedOptions
		}

		function isJSON(json) {
			try {
				return json instanceof Object && JSON.parse(JSON.stringify(json));

			} catch (e) {
				return false
			}
		}

	}, {}]
}, {}, [8]);