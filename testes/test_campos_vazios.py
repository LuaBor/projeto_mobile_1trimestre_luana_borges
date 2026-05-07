import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
import time

def test_campos_iniciais_estao_vazios():
    driver = webdriver.Chrome()
    
    driver.implicitly_wait(10)
    
    # URL da sua página (conforme seu print)
    url_agendamento = "http://localhost:8081/vit" 
    
    try:
        driver.get(url_agendamento)
        
        time.sleep(2)
        
        inputs = driver.find_elements(By.TAG_NAME, "input")
        
        print("\nVerificando se os campos iniciam vazios...")
        
        for i in range(len(inputs)):
            campo = driver.find_elements(By.TAG_NAME, "input")[i]
            
            valor = campo.get_attribute("value").strip()
            
            assert valor == "", f"Erro: O campo de índice {i} não está vazio! Conteúdo encontrado: '{valor}'"
            
            print(f"Campo {i}: Vazio (OK)")

        print("\nTeste de Estado Inicial: Passou! Todos os campos estão limpos.")

    except Exception as e:
        raise e
        
    finally:
        driver.quit()