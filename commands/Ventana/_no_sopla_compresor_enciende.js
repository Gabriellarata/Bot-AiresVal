/*CMD
  command: /no_sopla_compresor_enciende
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Ventana
  answer: ¿El compresor enciende?
  keyboard: Sí, No, \n Ir atrás
  aliases: 
CMD*/

if(message=="Sí"){
  Bot.runCommand("/proceso_14")
}
if(message=="No"){
  Bot.runCommand("/necesitamos_revisarlo")
}
if(message=="Ir atrás"){
  Bot.runCommand("/sopla")
}
