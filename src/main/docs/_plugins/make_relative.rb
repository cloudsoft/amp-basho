# make a path relative

require 'pathname'

module MakeRelative

  class MakeRelativeTag < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
      @text = text
    end
    def render(context)
      filename = @text.strip
      filename = context[filename] || filename
      filename = Pathname.new(filename)
      filename = filename.relative_path_from(Pathname.new("/")) unless filename.relative?

      # Pathname API ignores first arg below if second is absolute
      page = context['page'] || context.registers[:page]
      file = Pathname.new(File.dirname(page['path'])) 
      file = file.cleanpath
      # is there a better way to trim a leading / ?
      file = file.relative_path_from(Pathname.new("/")) unless file.relative?

      result = filename.relative_path_from(file)

      return result
    end
  end
end

Liquid::Template.register_tag('make_relative', MakeRelative::MakeRelativeTag)
