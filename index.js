new gridjs.Grid({
    columns: ["Name", "Email", "Phone Number"],
    data: [
        ["Test Network","Tests code works","Tester","https://twitter.com/Samuel_Hoskin",""],
        ["Civil Service Environment Network","Our mission is to build environmental knowledge and policy capability across the Civil Service. Our members want to learn about the environment and network with like-minded colleagues. CSEN offers a series of different events and resources, aimed to educate, develop and inspire.","Any UK civil servant","https://www.civilserviceenvironmentnetwork.org/","environment.network@faststream.civilservice.gov.uk"],
        ["X-Gov Delivery Community","We exist to: share information about how to deliver digital projects and services in the public sector, create the opportunity to share experiences, observed behaviours and best practice, give us space to discuss and challenge how we deliver government projects and products.","X-Gov, Digital Delivery Professionals ","https://community.delivercon.uk/index.php/Main_Page","DIGITAL.DELIVERYPRACTICE@DWP.GOV.UK"],
        ["Fast Stream LGBT+ Network","To provide representation, community support and development opportunities to LGBT+ and/or questioning Fast Streamers.","For Fast Streamers.","http://facebook.com/groups/FastStreamLGBT","lgbt.network@faststream.civilservice.gov.uk"],
        ["Gov DMs in the Ether","Monthly lean coffee for Delivery Managers (DMs) in the public sector.","Any public sector delivery manager.","https://community.delivercon.uk/","info@delivercon.uk"],
        ["Department for Secret Stuff Internal Staff Network ","Test network for networks that are internal or do not have an email or website that is public","DFSS Staff only","",""],
        ["x-public sector Climate Show and Tell","The of the Climate Show and Tells is to share climate related work that's happening across the public sector, facilitate collaboration and inspire a sense of active optimism in the face of the climate emergency. ","You must have a UK public sector email address to join","https://mailchi.mp/7128711eeec0/xgovclimateworkshowandtell","becky.miller@defra.gov.uk"]
    ],
    search: {
        enabled: true
      },
    pagination: {
     enabled: true,
     limit: 20,
     summary: false
     }
  }).render(document.getElementById("wrapper"));