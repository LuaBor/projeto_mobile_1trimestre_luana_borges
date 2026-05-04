import pytest
import time
from selenium import webdriver
from selenium.webdriver.common.by import By

def test_botao_voltar_para_login():
    driver = webdriver.Chrome()
    
    try:
        driver.get("http://localhost:8081/vit") 
        time.sleep(2)
        
        botao_voltar = driver.find_element(By.XPATH, "//*[contains(text(), 'Voltar')]")
        botao_voltar.click()
        
        time.sleep(2)
        
        url_esperada = "http://localhost:8081/" 
        assert driver.current_url.rstrip('/') == url_esperada.rstrip('/')
        
        print("\nTeste Botão Voltar: Passou!")
        
    except Exception as e:
        print(f"\nErro: {e}")
        raise e
        
    finally:
        driver.quit()