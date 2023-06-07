import requests
import bs4
import re

headers = {
  "user-agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36'
}
url = "https://www.kabum.com.br/produto/99889/caixa-de-som-multimidia-logitech-z607-som-surround-5-1-bluetooth-e-3-5mm-radio-fm-usb-e-leitor-sd-980-001321"

request = requests.get(url, headers=headers)

html = bs4.BeautifulSoup(request.content, 'html.parser')

price_element = html.find(class_="finalPrice")

price_content = price_element.string

real, cents = map(lambda value: re.sub(r'[^0-9]', '', value), price_content.split(','))

price = float('.'.join([real, cents]))

print(price)