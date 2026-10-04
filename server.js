import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

let stores = [
  { id: 'mora-demo', name: 'Mora - Demo', owner: 'Demo', whatsapp: '543454000000', plan: 'pro', amount: 15000, status: 'active', nextDue: '2026-11-15', lastPayment: '2026-10-15' }
];

app.get('/api/stores', (req,res)=> res.json(stores));

app.get('*', (req,res)=>{
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, ()=> console.log('Servidor en puerto '+PORT));
