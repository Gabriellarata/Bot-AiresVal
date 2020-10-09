/*CMD
  command: /contactanos
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Auxiliares

  <<ANSWER
📲 Nuestros contactos: 
 Telegram: @Airesval
 Whatsapp: 
+584244258202 
+584244604071
Instagram:
@ServiciosAiresval
  ANSWER
  keyboard: Reiniciar consulta
  aliases: 
CMD*/

if(message=="Reiniciar consulta"){
  Bot.runCommand("/reiniciar")
}
