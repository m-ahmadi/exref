# setup.py
from setuptools import find_packages, setup

setup(
	name='mypkg',
	packages=find_packages(),
	version='0.0.1',
	description='foo',
	author='bar',
	license='MIT',
)

# pip install -e .