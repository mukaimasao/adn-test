import React from 'react';
import Icon from './Icon';

export default function WorkAside() {
  return (
    <aside className="work-aside reveal">
      <div className="work-trust-card">
        <div className="script">La confiance à domicile</div>
        <h3>Um trabalho que faz a diferença</h3>
        <p>Junte-se a uma equipe humana, que valoriza o seu cuidado e acompanha o seu crescimento.</p>
        <div className="work-trust-list">
          <div className="li">
            <span className="ic"><Icon name="heart" size={18} /></span>
            <span>Ambiente acolhedor e respeitoso no dia a dia.</span>
          </div>
          <div className="li">
            <span className="ic"><Icon name="grad" size={18} /></span>
            <span>Formação e acompanhamento personalizados.</span>
          </div>
          <div className="li">
            <span className="ic"><Icon name="calClock" size={18} /></span>
            <span>Horários adaptados à sua rotina.</span>
          </div>
          <div className="li">
            <span className="ic"><Icon name="pin" size={18} /></span>
            <span>Atuação perto de onde você mora.</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
