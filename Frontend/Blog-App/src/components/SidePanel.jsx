import EditNoteIcon from "@mui/icons-material/EditNote";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LockIcon from "@mui/icons-material/Lock";
import VpnLockIcon from "@mui/icons-material/VpnLock";

const SidePanel = () => {
  return (
    <div className="shadow-lg">
      <div className="text-center py-5">
        <h4 className="font-bold">Mas de 12000 lectores visitan nuestro blog por dia</h4>
        <div className="flex gap-2 flex-wrap justify-evenly mt-3">
          <div className="cursor-pointer">
            <EditNoteIcon />
            <p>Comienza a escribir</p>
          </div>
          <div className="cursor-pointer">
            <ShoppingCartIcon />
            <p>Crea un sitio de E-Commerce</p>
          </div>
          <div className="cursor-pointer">
            <LockIcon />
            <p>Curso de cyberseguridad</p>
          </div>
          <div className="cursor-pointer">
            <VpnLockIcon />
            <p>Curso de hacking</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
