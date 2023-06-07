import requests
import bs4
import re

# URL do site alvo
url = "https://www.kabum.com.br/produto/99889/caixa-de-som-multimidia-logitech-z607-som-surround-5-1-bluetooth-e-3-5mm-radio-fm-usb-e-leitor-sd-980-001321"

# Define header para emular uma requisição feita via browser/navegador (client). Para sites que bloqueia requisição de máquinas
headers = {
  "user-agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36'
}

# Faz requisição HTTP para obter o conteúdo da página
response = requests.get(url, headers=headers)
html_content = response.content

# Criar o objeto BeautifulSoup para analisar o HTML
html = bs4.BeautifulSoup(html_content, 'html.parser')

# Encontrar o elemento com base na classe
price_element = html.find(class_="finalPrice")
price_content = price_element.string

# Tratar valor
real, cents = map(lambda value: re.sub(r'[^0-9]', '', value), price_content.split(','))

# Fazer concatenação
price = float('.'.join([real, cents]))

print(price)