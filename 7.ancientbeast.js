(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{175:function(e,t,a){"use strict";a.r(t);var r=a(16),n=a(5),i=a(7),s=a(1),c=a(17);t.default=function(e){e.abilities[33]=[{trigger:"onStepIn onStartPhase",_targetTeam:n.a.enemy,require:function(){return this.testRequirements()},activate:function(){var t=this.creature,a=this.getTargets(this.creature.adjacentHexes(1));if(!this.atLeastOneTarget(this.creature.adjacentHexes(1),{team:this._targetTeam}))return!1;this.end(),this.setUsed(!1),a.forEach((function(a){if(a.target instanceof s.a){var r=a.target;if(Object(n.b)(t,r,a._targetTeam)){var i={effectFn:function(t,a){var n=!1;a.adjacentHexes(1).forEach((function(){r.creature instanceof s.a&&e.creatures[r.creature]===t.owner&&(n=!0)})),n||a.effects.forEach((function(e){"Contaminated"==e.name&&e.deleteEffect()}))},alterations:{regrowth:-5},turn:e.turn},f=new c.a("Contaminated",t,r,"onStartPhase",i,e),u=!0;r.effects.forEach((function(t){"Contaminated"==t.name&&t.turn==e.turn&&(u=!1)})),u&&r.addEffect(f)}}}))}},{trigger:"onQuery",damages:{slash:40},_targetTeam:n.a.enemy,require:function(){return!!this.testRequirements()&&!!this.atLeastOneTarget(this.creature.adjacentHexes(1),{team:this._targetTeam})},query:function(){var t=this.creature,a=this;e.grid.queryCreature({fnOnConfirm:function(){a.animation.apply(a,arguments)},team:this._targetTeam,id:t.id,flipped:t.flipped,hexes:e.grid.getHexMap(t.x-2,t.y-2,0,!1,[[0,0,0,0],[0,1,0,1],[1,0,0,1],[0,1,0,1]])})},activate:function(t){this.end();var a=new r.a(this.creature,this.damages,1,[],e),n=t.takeDamage(a);""==n.status&&this.creature.addEffect(new c.a("Regrowth++",this.creature,this.creature,"onStartPhase",{effectFn:function(e){e.deleteEffect()},alterations:{regrowth:Math.round(n.damages.total/4)}},e)),this.creature.effects.forEach((function(e){"Frogger Bonus"==e.name&&this.deleteEffect()}))}},{trigger:"onQuery",require:function(){return this.testRequirements()},fnOnSelect:function(e){this.creature.tracePosition({x:e.x,y:e.y,overlayClass:"creature moveto selected player"+this.creature.team})},query:function(){var t=this,a=this.creature,r=e.grid.getFlyingRange(a.x,a.y,50,a.size,a.id).filter((function(e){return a.item==e.y}));e.grid.queryHexes({fnOnSelect:function(){t.fnOnSelect.apply(t,arguments)},fnOnConfirm:function(){t.animation.apply(t,arguments)},size:a.size,flipped:a.player.flipped,id:a.id,hexes:r})},activate:function(t){this.end(),this.creature.moveTo(t,{ignoreMovementPoint:!0,ignorePath:!0,callback:function(){e.activeCreature.queryMove()}}),this.creature.addEffect(new c.a("Offense++",this.creature,this.creature,"onStepIn onEndPhase",{effectFn:function(e){e.deleteEffect()},alterations:{offense:25}},e))}},{trigger:"onQuery",damages:{pierce:15,slash:10,crush:5},_targetTeam:n.a.enemy,require:function(){if(!this.testRequirements())return!1;var t=e.grid.getHexMap(this.creature.x-2,this.creature.y-2,0,!1,i.i);return!!this.atLeastOneTarget(t,{team:this._targetTeam})},query:function(){var t=this,a=this.creature;e.grid.queryCreature({fnOnConfirm:function(){t.animation.apply(t,arguments)},team:this._targetTeam,id:a.id,flipped:a.flipped,hexes:e.grid.getHexMap(a.x-2,a.y-2,0,!1,i.i)})},activate:function(t){this.end();var a=new r.a(this.creature,this.damages,1,[],e);t.takeDamage(a),this.creature.effects.forEach((function(e){"Offense++"==e.name&&e.deleteEffect()}))}}]}}}]);