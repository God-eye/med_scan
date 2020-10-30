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
            # print('*'*40,'\n',next_page)
            yield  scrapy.Request(next_page, callback=self.parse) 