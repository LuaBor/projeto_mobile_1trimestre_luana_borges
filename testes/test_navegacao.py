import pytest
import time
from selenium import webdriver
from selenium.webdriver.common.by import By

def test_navegacao_para_cadastro():
    driver = webdriver.Chrome()
    
    try:
        driver.get("http://localhost:8081")
        
        time.sleep(3)
        
        botao_login = driver.find_element(By.XPATH, "//*[contains(text(), 'Login')]")
        botao_login.click()
        
        time.sleep(2)
        
        assert "/vit" in driver.current_url
        print("\nTeste Passou!")
        
    except Exception as e:
        print(f"\nO erro real foi: {e}")
        raise e
        
    finally:
        driver.quit()