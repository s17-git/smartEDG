import ScrollToTop from '@/app/components/ScrollToTop';
import { prisma } from '@/lib/prisma';
import { MoreHorizontal, Edit, Trash2, Eye, UserPlus, Search } from 'lucide-react';

const Inscrits = async () => {

    const users = await prisma.user.findMany();

  
    const usersWithStatus = users.map((user) => ({
      ...user,
      status: Math.random() > 0.5 ? 'Actif' : 'Inactif',
    }));
    

  return (
    <div className="p-8 bg-gray-50 min-h-screen font-sans">
       <ScrollToTop /> 
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Tableau de bord des inscrits</h1>
            <p className="text-gray-500 mt-1 text-sm">Gérez les membres de votre plateforme et leurs permissions.</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Rechercher..." 
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-all w-64"
              />
            </div>
            <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl font-medium transition-all shadow-sm active:scale-95">
              <UserPlus size={18} />
              <span>Ajouter</span>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50 border-b border-gray-200">
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Utilisateur</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Contact</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Rôle</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">Statut</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {usersWithStatus.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50/80 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-sm border border-indigo-200">
                        {user.prenom[0]}{user.nom[0]}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{user.prenom} {user.nom}</div>
                        <div className="text-xs text-gray-400">ID: #{user.id.toString().padStart(4, '0')}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-600 font-medium">{user.email}</div>
                    <div className="text-xs text-gray-400">{user.telephone}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded-md">{user.role}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                      user.status === 'Actif' ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-600'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${user.status === 'Actif' ? 'bg-emerald-500' : 'bg-gray-400'}`}></span>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all" title="Voir">
                        <Eye size={18} />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-all" title="Modifier">
                        <Edit size={18} />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all" title="Supprimer">
                        <Trash2 size={18} />
                      </button>
                    </div>
                    <button className="p-2 text-gray-400 group-hover:hidden">
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="px-6 py-4 bg-gray-50/50 border-t border-gray-200 flex items-center justify-between text-sm text-gray-500">
            <span>Affichage de {users.length} inscrits</span>
            <div className="flex gap-2">
              <button className="px-3 py-1 border border-gray-200 rounded-md bg-white hover:bg-gray-50 disabled:opacity-50" disabled>Précédent</button>
              <button className="px-3 py-1 border border-gray-200 rounded-md bg-white hover:bg-gray-50">Suivant</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inscrits;
