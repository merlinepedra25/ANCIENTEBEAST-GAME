(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{180:function(e,t,i){"use strict";i.r(t);var a=i(16),r=i(5),s=i(7),n=i(1),u=i(17);t.default=function(e){e.abilities[9]=[{trigger:"onEndPhase",_effectName:"Frostified",_getOffenseBuff:function(){return this.isUpgraded()?5:0},require:function(){var e=this;return this.creature.effects.forEach((function(t){t.name===e._effectName&&(t.alterations.offense=e._getOffenseBuff())})),this.creature.remainingMove<this.creature.stats.movement?(this.message="The creature moved this round.",!1):this.testRequirements()},activate:function(){this.creature.addEffect(new u.a(this._effectName,this.creature,this.creature,"",{alterations:{frost:5,defense:5,offense:this._getOffenseBuff()},stackable:!0},e))}},{trigger:"onQuery",_targetTeam:r.a.enemy,require:function(){return!!this.testRequirements()&&!!this.atLeastOneTarget(this.creature.getHexMap(s.i),{team:this._targetTeam})},query:function(){var t=this;e.grid.queryCreature({fnOnConfirm:function(){t.animation.apply(t,arguments)},team:this._targetTeam,id:this.creature.id,flipped:this.creature.flipped,hexes:this.creature.getHexMap(s.i)})},activate:function(t){this.end();var i=this.damages;this.isUpgraded()&&(t.size<this.creature.size||t.level<this.creature.level)||(i.pierce=0);var r=new a.a(this.creature,i,1,[new u.a(this.title,this.creature,this.target,"",{alterations:{frost:-1},stackable:!0},e)],e);t.takeDamage(r)}},{trigger:"onQuery",_targetTeam:r.a.enemy,require:function(){return!!this.testRequirements()&&!!this.atLeastOneTarget(this.creature.getHexMap(s.i),{team:this._targetTeam})},query:function(){var t=this;e.grid.queryCreature({fnOnConfirm:function(){t.animation.apply(t,arguments)},team:this._targetTeam,id:this.creature.id,flipped:this.creature.flipped,hexes:this.creature.getHexMap(s.i)})},activate:function(t){this.end();var i=[];this.isUpgraded()&&i.push(new u.a(this.title,this.creature,t,"",{alterations:{defense:-10},stackable:!0,turnLifetime:1,deleteTrigger:"onStartPhase"},e));var r=new a.a(this.creature,this.damages,1,i,e),s=t.takeDamage(r);s.kill||""!==s.damageObj.status||t.delay()}},{trigger:"onQuery",directions:[1,1,1,1,1,1],_targetTeam:r.a.both,_getDistance:function(){return this.isUpgraded()?0:6},require:function(){if(!this.testRequirements())return!1;var e=this.creature,t=e.player.flipped?e.x-e.size+1:e.x;return!!this.testDirection({team:this._targetTeam,x:t,directions:this.directions,distance:this._getDistance(),stopOnCreature:!1})},query:function(){var t=this,i=this.creature,a=i.player.flipped?i.x-i.size+1:i.x;e.grid.queryDirection({fnOnConfirm:function(){t.animation.apply(t,arguments)},team:this._targetTeam,id:i.id,requireCreature:!0,x:a,y:i.y,directions:this.directions,distance:this._getDistance(),stopOnCreature:!1})},activate:function(t){this.end();for(var i=0;i<t.length;i++)if(t[i].creature instanceof n.a){var r=t[i].creature,s={pierce:this.damages.pierce,frost:6-i};s.frost<0&&(s.frost=0);var u=new a.a(this.creature,s,1,[],e),c=r.takeDamage(u);if("Shielded"===c.damageObj.status||c.damages&&c.damages.total<=0)break}}}]}}}]);