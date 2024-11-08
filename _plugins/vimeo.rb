class Vimeo < Liquid::Tag
  Syntax = /^\s*([^\s]+)(\s+(\d+)\s+(\d+)\s*)?/

  def initialize(tagName, markup, tokens)
    super

    if markup =~ Syntax then
      @id = $1
      @width = 640
      @height = 400
      if $2.nil? then
      else
          @width = $2.split(' ', 2)[0]
          @height = $2.split(' ', 2)[1]
      end
    else
      raise "No Vimeo ID provided in the \"vimeo\" tag"
    end
  end

  def render(context)
    "<iframe width=\"#{@width}\" height=\"#{@height}\" src=\"https://player.vimeo.com/video/#{@id}?byline=0\" frameborder=\"0\" webkitAllowFullScreen mozallowfullscreen allowfullscreen></iframe>"
  end

  Liquid::Template.register_tag "vimeo", self
end
