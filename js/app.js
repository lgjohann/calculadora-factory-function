function CriaCalculadora () {
    return {
        display: document.querySelector(".display"),

        inicia() {
            this.cliqueBotoes();
            this.pressionaBackSpace();
            this.pressionaEnter();
          },
      
          pressionaBackSpace() {
            this.display.addEventListener('keydown', e => {
              if (e.keyCode === 8) {
                e.preventDefault();
                this.limpar();
              }
            });
          },
      
          pressionaEnter() {
            this.display.addEventListener('keyup', e => {
              if (e.keyCode === 13) {
                this.executarConta();
              }
            });
          },
      
        cliqueBotoes() {
            el = document.addEventListener("click", (e) => {
                 el = e.target;
                    if (el.classList.contains("btn-num")) {
                        this.passarProDisplay(el.innerText);                        
                    }

                    if (el.classList.contains("btn-clear")) {
                        this.limpar();
                    }
                    
                    if (el.classList.contains("btn-del")) {
                        this.apagarUmDigito();
                    }

                    if (el.classList.contains("btn-eq")) {
                        this.executarConta();
                    }
                    
                    this.display.focus();
            })
        },
        
        passarProDisplay(num) {
            this.display.value += num;            
        },
        
        limpar() {
            this.display.value = "";
        },

        apagarUmDigito() {
            this.display.value = this.display.value.slice(0, -1);
        },

        executarConta() {
            let conta = this.display.value;

            try {
              conta = eval(conta);
      
              if(!conta) {
                alert('Conta inválida');
                return;
              }
      
              this.display.value = String(conta);
            } catch(e) {
              alert('Conta inválida');
              return;
            }
          },
    }
}

const calculadora = CriaCalculadora();
calculadora.inicia()