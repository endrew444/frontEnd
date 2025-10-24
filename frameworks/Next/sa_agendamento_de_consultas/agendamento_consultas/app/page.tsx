'use client';

import { useState, useEffect } from 'react';

interface Paciente {
  _id: string;
  nome: string;
  telefone: string;
}

interface Medico {
  _id: string;
  nome: string;
  especialidade: string;
}

interface Consulta {
  _id: string;
  paciente: Paciente;
  medico: Medico;
  data: string;
  hora: string;
  status: string;
}

export default function Home() {
  const [pacientes, setPacientes] = useState<Paciente[]>([]);
  const [medicos, setMedicos] = useState<Medico[]>([]);
  const [consultas, setConsultas] = useState<Consulta[]>([]);
  const [activeTab, setActiveTab] = useState('pacientes');

  const fetchPacientes = async () => {
    const res = await fetch('/api/pacientes');
    const data = await res.json();
    setPacientes(data);
  };

  const fetchMedicos = async () => {
    const res = await fetch('/api/medicos');
    const data = await res.json();
    setMedicos(data);
  };

  const fetchConsultas = async () => {
    const res = await fetch('/api/consultas');
    const data = await res.json();
    setConsultas(data);
  };

  useEffect(() => {
    const loadData = async () => {
      await fetchPacientes();
      await fetchMedicos();
      await fetchConsultas();
    };
    loadData();
  }, []);

  return (
    <div>
      <header className="header">
        <h1>Sistema de Agendamento de Consultas</h1>
        <h2>Clínica Saúde & Bem-estar</h2>
      </header>
      <div className="container">
        <nav>
          <button onClick={() => setActiveTab('pacientes')}>Pacientes</button>
          <button onClick={() => setActiveTab('medicos')}>Médicos</button>
          <button onClick={() => setActiveTab('consultas')}>Consultas</button>
        </nav>

        {activeTab === 'pacientes' && <PacientesTab pacientes={pacientes} fetchPacientes={fetchPacientes} />}
        {activeTab === 'medicos' && <MedicosTab medicos={medicos} fetchMedicos={fetchMedicos} />}
        {activeTab === 'consultas' && <ConsultasTab consultas={consultas} pacientes={pacientes} medicos={medicos} fetchConsultas={fetchConsultas} />}
      </div>
    </div>
  );
}

function PacientesTab({ pacientes, fetchPacientes }: { pacientes: Paciente[], fetchPacientes: () => void }) {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/pacientes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, telefone }),
    });
    setNome('');
    setTelefone('');
    fetchPacientes();
  };

  return (
    <div>
      <h2>Pacientes</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome:</label>
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Telefone:</label>
          <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />
        </div>
        <button type="submit">Adicionar Paciente</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Telefone</th>
          </tr>
        </thead>
        <tbody>
          {pacientes.map((paciente) => (
            <tr key={paciente._id}>
              <td>{paciente.nome}</td>
              <td>{paciente.telefone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function MedicosTab({ medicos, fetchMedicos }: { medicos: Medico[], fetchMedicos: () => void }) {
  const [nome, setNome] = useState('');
  const [especialidade, setEspecialidade] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/medicos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, especialidade }),
    });
    setNome('');
    setEspecialidade('');
    fetchMedicos();
  };

  return (
    <div>
      <h2>Médicos</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome:</label>
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Especialidade:</label>
          <input type="text" value={especialidade} onChange={(e) => setEspecialidade(e.target.value)} required />
        </div>
        <button type="submit">Adicionar Médico</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Especialidade</th>
          </tr>
        </thead>
        <tbody>
          {medicos.map((medico) => (
            <tr key={medico._id}>
              <td>{medico.nome}</td>
              <td>{medico.especialidade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ConsultasTab({ consultas, pacientes, medicos, fetchConsultas }: { consultas: Consulta[], pacientes: Paciente[], medicos: Medico[], fetchConsultas: () => void }) {
  const [pacienteId, setPacienteId] = useState('');
  const [medicoId, setMedicoId] = useState('');
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [status, setStatus] = useState('Agendada');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/consultas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ paciente: pacienteId, medico: medicoId, data, hora, status }),
    });
    setPacienteId('');
    setMedicoId('');
    setData('');
    setHora('');
    setStatus('Agendada');
    fetchConsultas();
  };

  return (
    <div>
      <h2>Consultas</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Paciente:</label>
          <select value={pacienteId} onChange={(e) => setPacienteId(e.target.value)} required>
            <option value="">Selecione um paciente</option>
            {pacientes.map((paciente) => (
              <option key={paciente._id} value={paciente._id}>{paciente.nome}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Médico:</label>
          <select value={medicoId} onChange={(e) => setMedicoId(e.target.value)} required>
            <option value="">Selecione um médico</option>
            {medicos.map((medico) => (
              <option key={medico._id} value={medico._id}>{medico.nome} - {medico.especialidade}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Data:</label>
          <input type="date" value={data} onChange={(e) => setData(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Hora:</label>
          <input type="time" value={hora} onChange={(e) => setHora(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Status:</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="Agendada">Agendada</option>
            <option value="Confirmada">Confirmada</option>
            <option value="Realizada">Realizada</option>
            <option value="Cancelada">Cancelada</option>
          </select>
        </div>
        <button type="submit">Agendar Consulta</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Paciente</th>
            <th>Médico</th>
            <th>Data</th>
            <th>Hora</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {consultas.map((consulta) => (
            <tr key={consulta._id}>
              <td>{consulta.paciente.nome}</td>
              <td>{consulta.medico.nome}</td>
              <td>{new Date(consulta.data).toLocaleDateString()}</td>
              <td>{consulta.hora}</td>
              <td>{consulta.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
