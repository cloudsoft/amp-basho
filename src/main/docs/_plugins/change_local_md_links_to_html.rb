# converts all local links ending .md to .html
# this allows links to refer to *.md inside md files, meaning github will render them nicely,
# but at build time this will change those links to *.html

module ChangeLocalMdLinksToHtml

  class Generator < Jekyll::Generator
    def generate(site)
      site.pages.each { |p| rewrite_links(site, p) }
    end

    def rewrite_links(site, page)
      page.content = page.content.gsub(/(\[[^\]]*\]\([^:\)]*)\.md\)/, '\1.html)')
    end
  end

end

