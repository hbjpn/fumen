# -*- coding: utf-8 -*-
# vim:fenc=utf-8 ff=unix ft=python ts=4 sw=4 sts=4 si et
"""
mkdocs-safe-text-plugin

BSD 2-Clause License

Copyright (c) 2018, raimon
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
"""
import os
from setuptools import setup, find_packages

setup(
    name='mkdocs-fumen-plugin',
    version='1.0.0',
    description='Plugin for fumen markdown integration with MKDocs.',
    long_description='Pluging for fumen markdown integration with MKDocs.',
    author='Hiroyuki Baba',
    author_email='tokyochofu@gmail.com',
    url='https://github.com/hbjpn/mkdocs-fumen-plugin',
    classifiers=[
        'Development Status :: 5 - Production/Stable',
        'License :: OSI Approved :: BSD License',
        'Programming Language :: Python',
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: 3.5',
        'Programming Language :: Python :: 3.6',
        'Programming Language :: Python :: 3.7',
        'Programming Language :: Python :: 3.8',
        'Topic :: Documentation',
        'Topic :: Text Processing',
    ],
    packages=find_packages(exclude=['tests*']),
    include_package_data=True,
    keywords='mkdocs fumen',
    license='BSD License',
    python_requires='~=3.5',
    install_requires=[
        'mkdocs>=0.17.0',
    ],
    setup_requires=[
        'pytest-runner',
    ],
    tests_require=[
        'pytest-cov',
        'pytest-pycodestyle',
        'pytest-runner',
    ],
    entry_points={
        'mkdocs.plugins': [
            'mkdocs_fumen = mkdocsfumen.plugin:FumenPlugin',
        ]
    }
)
