# vim:fenc=utf-8 ff=unix ft=python ts=4 sw=4 sts=4 si et
"""
mkdocs-safe-text-plugin

BSD 2-Clause License

Copyright (c) 2020, Hiroyuki Baba
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
from mkdocs.plugins import BasePlugin
import mkdocs
import logging
import re
import base64


logging.basicConfig(filename='/Users/baba/fumenlog.log', level=logging.DEBUG)

def repl(m):
    s = m.groups()[0]
    return "FUMENSTART"+base64.b64encode(s.encode()).decode()+"FUMENEND"

def derepl(m):
    b64 = m.groups()[0]
    return "<div class='fumenbox'><textarea class='fumencode'>"+base64.b64decode(b64).decode()+"</textarea><div class='score_area'></div></div>"

class FumenPlugin(BasePlugin):
    config_scheme = (
        ('foo', mkdocs.config.config_options.Type(str, default='a default value')),
        ('bar', mkdocs.config.config_options.Type(int, default=0)),
        ('baz', mkdocs.config.config_options.Type(bool, default=True))
    )

    def on_config(self, config):
        self.config = config
        return config

    def on_page_markdown(self, markdown, page, config, files):
        """
        The page_markdown event is called after the page's markdown is loaded 
        from file and can be used to alter the Markdown source text. 
        The meta- data has been stripped off and is available as page.meta 
        at this point.
        
        See:
        https://www.mkdocs.org/user-guide/plugins/#on_page_markdown
        
        Args:
            markdown (str): Markdown source text of page as string
            page (Page): mkdocs.nav.Page instance
            config (dict): global configuration object
            files (list): global files collection
        
        Returns:
            markdown (str): Markdown source text of page as string
        """

        regstr = re.escape("<!-- fumen:start -->")+"(.*?)"+re.escape("<!-- fumen:end -->")
        newmd = re.sub( regstr, repl, markdown, flags=re.MULTILINE|re.DOTALL)
        return newmd
  

    def on_page_content(self, html, **kwargs):
        """
        The page_content event is called after the Markdown text is rendered
        to HTML (but before being passed to a template) and can be used to 
        alter the HTML body of the page.

        Parameters:
            html: HTML rendered from Markdown source as string
            page: mkdocs.nav.Page instance
            config: global configuration object
            files: global files collection

        Returns:
            HTML rendered from Markdown source as string
        """

        logging.info('on_page_content')
        regstr = re.escape("FUMENSTART")+"(.*?)"+re.escape("FUMENEND")
        newhtml = re.sub( regstr, derepl, html)
        logging.info(newhtml)

        return newhtml
    
    def on_post_page(self, output, page, config):
        logging.info('on_post_page')
        logging.info(output)
