project = 'PlantUML Settings'
copyright = '2022, Attila Zsolt Somogyi'
author = 'Attila Zsolt Somogyi'

extensions = [
    'sphinx.ext.duration',
    'sphinx.ext.doctest',
    'sphinx.ext.autodoc',
    'sphinx.ext.autosummary',
    'sphinx.ext.intersphinx',
]

templates_path = ['_templates']

html_theme = 'sphinx_rtd_theme'
html_static_path = ['_static']

epub_show_urls = 'footnote'

intersphinx_mapping = {
    'python': ('https://docs.python.org/3/', None),
    'sphinx': ('https://www.sphinx-doc.org/en/master/', None),
}

intersphinx_disabled_domains = ['std']