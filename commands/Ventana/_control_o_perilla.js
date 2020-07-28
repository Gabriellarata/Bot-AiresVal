/*CMD
  command: /control_o_perilla
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Ventana
  answer: ¿Usa control o perilla?
  keyboard: Control, Perilla, \n Ir atrás
  aliases: 
CMD*/

if(message=="Control"){
  Bot.runCommand("/enciende")
}
if(message=="Perilla"){
  Bot.runCommand("/sopla")
}
if(message=="Ir atrás"){
  Bot.runCommand("/ventana_o_split")
}
