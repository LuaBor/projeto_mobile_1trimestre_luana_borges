import pytest
from selenium import webdriver

def test_verificacao_conectividade_login():
    driver = webdriver.Chrome()
    
    url_login = "http://localhost:8081"
    
    try:
        driver.get(url_login)
    
        assert url_login in driver.current_url
        
        print(f"\nConectividade com {url_login}: Válida!")
        
    except Exception as e:
        print(f"\nFalha na conectividade: O servidor pode estar offline. Erro: {e}")
        raise e
        
    finally:
        driver.quit()