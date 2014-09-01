jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000

fhir = jqFhir

describe "jqFhir", ->
  subject = fhir
      baseUrl: 'https://ci-api.fhir.me',
      auth: {user: 'client', pass: 'secret'}

  it "simplest", (done) ->
    subject.search('Patient', {name: 'maud'}).then (d)-> done()
