import scrapy

class Scrp_drg(scrapy.Spider):
    name = 'drgs'

    start_urls = [
        'https://www.drugs.com/drug_information.html'
    ]
    
    n = 0
    def parse(self, response):
        # fle_nme = 'drg_lst.json'
        for drg in response.css('.ddc-list-column-2 li'):
            yield { 
                'drg_name':drg.css('a::text').get(),
                'drg_url':'https://www.drugs.com'+drg.css('a::attr(href)').get()
            }

        for initials in response.css('.alpha-list a::attr(href)').extract():
            next_page = response.urljoin(initials)
            yield  scrapy.Request(next_page, callback=self.sub_pg) 

    def sub_pg(self, response):
        for sub_pg in response.css('div.paging-list-wrap:nth-child(3) > ul:nth-child(1) a::attr(href)').extract():
            fnl_page = response.urljoin(sub_pg)
            yield scrapy.Request(fnl_page, callback=self.parse)