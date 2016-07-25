module Jekyll
  module RandomFilter
    def random(input)
      rand(1..input)
    end
  end
end

Liquid::Template.register_filter(Jekyll::RandomFilter)
