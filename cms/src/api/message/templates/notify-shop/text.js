module.exports = `

Hallo Wespi Sins Team.

Soeben wurde eine neue Nachricht über das Kontakt-Formular der Website verfasst.

Diese Angaben wurden übermittelt:

Firma:	
<%= data.message.company %>

Vorname:	
<%= data.message.firstname %>

Nachname:	
<%= data.message.lastname %>

E-Mail-Adresse:	
<%= data.message.email %>

Telefonnummer:	
<%= data.message.phone %>

Betreff:	
<%= data.message.subject %>

Nachricht:	
<%= data.message.content %>
`;