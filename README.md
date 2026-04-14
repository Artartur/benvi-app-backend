# Benvi App a platform where you can schedule your medical consultation


--- Routes ---

/patients/

(All) - GET - /
(All with paginations) - GET - /?page={number}&limit={number}
(All patients actives or inactives with paginations) - GET - /?page={number}&limit={number}&isActive={boolean}
(Patient by id) - GET BY ID - /id/:
(Patient by cpf / ssn) - GET BY CPF - /cpf/:

(create) - POST - /

(Deactivate patient) - PATCH - /:id/deactivate
(Update) - PUT - /:id

(delete) - DELETE - /:id
