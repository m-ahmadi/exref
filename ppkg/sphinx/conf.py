# https://www.sphinx-doc.org/en/master/usage/configuration.html


# project info
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information
project = 'Example Documentation'
copyright = '2025, Mohammad Ahmadi'
author = 'Mohammad Ahmadi'
release = '2026'

# general
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration
extensions = []
#extensions = ['myst_parser'] # for when not using rst
templates_path = ['_templates']
exclude_patterns = []

# html output
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output
html_theme = 'sphinx_book_theme'
html_static_path = ['_static']
