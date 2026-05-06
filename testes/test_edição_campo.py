import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
import time

def test_campos_sao_digitaveis():
    driver = webdriver.Chrome()
    driver.implicitly_wait(10)
    
    url_agendamento = "http://localhost:8081/vit" 
    
    try:
        driver.get(url_agendamento)
        time.sleep(2) 
        
        dados_teste = ["Ana Silva", "15/10/2026", "14:30", "4"]
        
        print("\nIniciando teste de digitação...")
        
        for i in range(len(dados_teste)):
            
            inputs = driver.find_elements(By.TAG_NAME, "input")
            campo = inputs[i]
            
            texto_para_digitar = dados_teste[i]
            
            campo.clear()
            campo.send_keys(texto_para_digitar)
            time.sleep(0.5) 
            
            inputs_verificacao = driver.find_elements(By.TAG_NAME, "input")
            valor_atual = inputs_verificacao[i].get_attribute("value")
            
            assert valor_atual == texto_para_digitar, f"Erro no campo {i}"
            print(f"Campo {i} (OK): '{valor_atual}'")

        print("Teste de campos digitáveis: Passou!")

    except Exception as e:
        raise e
        
    finally:
        driver.quit()