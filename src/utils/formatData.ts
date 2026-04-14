import { PatientDocument } from 'src/schema/patient.schema';

export function formatMultipleTimezones(patients: PatientDocument[]) {
  return patients.map((patient: PatientDocument) => ({
    ...patient.toObject(),
    createdAt: patient.createdAt.toLocaleString('pt-BR', {
      timeZone: 'America/Sao_Paulo',
    }),
    updatedAt: patient.updatedAt.toLocaleString('pt-BR', {
      timeZone: 'America/Sao_Paulo',
    }),
  }));
}

export function formatTimezone(patient: PatientDocument) {
  return {
    ...patient.toObject(),
    createdAt: patient.createdAt.toLocaleString('pt-BR', {
      timeZone: 'America/Sao_Paulo',
    }),
    updatedAt: patient.updatedAt.toLocaleString('pt-BR', {
      timeZone: 'America/Sao_Paulo',
    }),
  };
}
