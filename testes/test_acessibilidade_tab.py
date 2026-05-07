import pytest
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import time

def test_ordem_tab_formulario():
    driver = webdriver.Chrome()
    driver.implicitly_wait(10)
    url_login = "http://localhost:8081"
    
    try:
        driver.get(url_login)
        time.sleep(2)
        
        primeiro_input = driver.find_elements(By.TAG_NAME, "input")[0]
        primeiro_input.click()
        
        for i in range(1, 4):
            driver.switch_to.active_element.send_keys(Keys.TAB)
            time.sleep(0.2) 
            elemento_atual = driver.switch_to.active_element
            assert elemento_atual.tag_name == "input", f"Erro no campo {i}: foco saiu dos inputs"

        driver.switch_to.active_element.send_keys(Keys.TAB)
        time.sleep(0.2)
        
        botao_atual = driver.switch_to.active_element
        assert "Login" in botao_atual.text, f"Erro: Botão Login não recebeu o foco. Focado em: {botao_atual.text}"
            
        print("\nTeste de Tab Index: Passou!")

    except Exception as e:
        raise e
        
    finally:
        driver.quit()