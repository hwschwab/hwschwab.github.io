source "https://rubygems.org"

# Use GitHub Pages
gem "github-pages", "~> 228", group: :jekyll_plugins

# Essential plugins
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.15"
  gem "jekyll-seo-tag", "~> 2.8"
end

# Windows and JRuby does not include zoneinfo files
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]

gem "webrick", "~> 1.8"
gem "jekyll-theme-minimal", "~> 0.2.0"
