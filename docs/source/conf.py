project = 'PlantUML Settings'
copyright = '2022, Attila Zsolt Somogyi'
author = 'Attila Zsolt Somogyi'

extensions = [
    'sphinx.ext.duration',
    'sphinx.ext.doctest',
    'sphinx.ext.autodoc',
    'sphinx.ext.autosummary',
    'sphinx.ext.intersphinx',
    'sphinx.ext.imgconverter',
    'sphinx_copybutton',
]

templates_path = ['_templates']
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store']

html_theme = 'sphinx_rtd_theme'
html_static_path = ['_static']
html_show_sourcelink = False
html_show_sphinx = False

html_css_files = [
    'css/dark.css',
    'css/general.css',
    'css/custom.css',
]

html_js_files = [
    'js/default_dark.js',
    'js/default_light.js',
    'js/theme_switcher.js',
    'js/custom.js',
]

epub_show_urls = 'footnote'

intersphinx_mapping = {
    'python': ('https://docs.python.org/3/', None),
    'sphinx': ('https://www.sphinx-doc.org/en/master/', None),
}

intersphinx_disabled_domains = ['std']
