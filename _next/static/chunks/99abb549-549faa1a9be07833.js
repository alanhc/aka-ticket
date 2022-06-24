"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[861],{6803:function(t,r,e){e.d(r,{Vy:function(){return L},fx:function(){return P},qm:function(){return h}});var o,i,a,n,s=e(3303),A=e(4170),E=e(8626),N=e(4431),c=e.n(N);e(4118),e(6752),e(2922),e(5196);function u(t,r,e,o){return new(e||(e=Promise))((function(i,a){function n(t){try{A(o.next(t))}catch(r){a(r)}}function s(t){try{A(o.throw(t))}catch(r){a(r)}}function A(t){var r;t.done?i(t.value):(r=t.value,r instanceof e?r:new e((function(t){t(r)}))).then(n,s)}A((o=o.apply(t,r||[])).next())}))}Error;!function(t){t[t.DELEGATION=10600]="DELEGATION",t[t.ORIGINATION=10600]="ORIGINATION",t[t.TRANSFER=10600]="TRANSFER",t[t.REVEAL=1100]="REVEAL"}(o||(o={})),function(t){t[t.DELEGATION=1257]="DELEGATION",t[t.ORIGINATION=1e4]="ORIGINATION",t[t.TRANSFER=1e4]="TRANSFER",t[t.REVEAL=374]="REVEAL"}(i||(i={})),function(t){t[t.DELEGATION=0]="DELEGATION",t[t.ORIGINATION=257]="ORIGINATION",t[t.TRANSFER=257]="TRANSFER",t[t.REVEAL=0]="REVEAL"}(a||(a={})),function(t){t.Pt24m4xi="Pt24m4xiPbLDhVgVfABUjirbmda3yohdN82Sp9FeuAXJ4eV9otd",t.PsBABY5H="PsBABY5HQTSkA4297zNHfsZNKtxULfL18y95qb3m53QJiXGmrbU",t.PsBabyM1="PsBabyM1eUXZseaJdmXFApDSBqj8YBfwELoxZHHW77EMcAbbwAS",t.PsCARTHA="PsCARTHAGazKbHtnKfLzQg3kms52kSRpgnDY982a9oYsSXRLQEb",t.PsDELPH1="PsDELPH1Kxsxt8f9eWbxQeRxkjfbxoqM52jvs5Y5fBxWWh4ifpo",t.PtEdo2Zk="PtEdo2ZkT9oKpimTah6x2embF25oss54njMuPzkJTEi5RqfdZFA",t.PsFLorena="PsFLorenaUUuikDWvMDr6fGBRG8kt3e3D3fHoXK1j1BFRxeSH4i",t.PtGRANADs="PtGRANADsDU8R9daYKAgWnQYAJ64omN1o3KMGVCykShA97vQbvV",t.PtHangz2="PtHangz2aRngywmSRGGvrcTyMbbdpWdpFKuS4uMWxg2RaH9i1qx",t.PsiThaCa="PsiThaCaT47Zboaw71QWScM8sXeMM7bbQFncK9FLqYc6EKdpjVP",t.Psithaca2="Psithaca2MLRFYargivpo7YvUr7wUDqyxrdhC5CQq78mRvimz6A",t.PtJakart2="PtJakart2xVj7pYXJBXrqHgd82rdkLey5ZeeGwDgPp9rhQUbSqY",t.ProtoALpha="ProtoALphaALphaALphaALphaALphaALphaALphaALphaDdp3zK"}(n||(n={}));n.Pt24m4xi,n.PsBABY5H,n.PsBabyM1,n.PsCARTHA,n.PsDELPH1,n.PtEdo2Zk,n.PsFLorena,n.PtGRANADs,n.PtHangz2,n.PsiThaCa,n.Psithaca2,n.PtJakart2,n.ProtoALpha;var T;!function(t){t.MAINNET="NetXdQprcVkpaWU",t.CARTHAGENET="NetXjD3HPJJjmcd",t.DELPHINET="NetXm8tYqnMWky1",t.EDONET="NetXSgo1ZT2DRUG",t.FLORENCENET="NetXxkAx4woPLyu",t.GRANADANET="NetXz969SFaFn8k",t.HANGZHOUNET="NetXZSsxBpMQeAT",t.ITHACANET="NetXbhmtAbMukLc",t.ITHACANET2="NetXnHfVqm9iesp",t.JAKARTANET2="NetXLH1uAxK7CCh"}(T||(T={}));function d(t){switch(t){case"tz":return 6;case"mtz":return 3;default:return 0}}function m(t="mutez",r="mutez",e){const o=new(c())(e);return o.isNaN()?e:o.multipliedBy(Math.pow(10,d(t))).dividedBy(Math.pow(10,d(r)))}Error;Error;class R extends Error{constructor(t,r){super(t),this.message=t,this.data=r,this.name="InvalidCodeParameter"}}class I extends Error{constructor(t,r){super(t),this.message=t,this.data=r,this.name="InvalidInitParameter"}}Error;Error;Error;Error;class g extends Error{constructor(t){super(t),this.message=t,this.name="OriginationParameterError"}}const P=({code:t,init:r,balance:e="0",delegate:n,storage:A,fee:N=i.ORIGINATION,gasLimit:c=o.ORIGINATION,storageLimit:T=a.ORIGINATION,mutez:d=!1})=>u(void 0,void 0,void 0,(function*(){if(void 0!==A&&void 0!==r)throw new g("Storage and Init cannot be set a the same time. Please either use storage or init but not both.");if(!Array.isArray(t))throw new R("Wrong code parameter type, expected an array",t);let o;if(void 0!==A){const r=t.find((t=>"prim"in t&&"storage"===t.prim));if(void 0===(null===r||void 0===r?void 0:r.args))throw new R("The storage section is missing from the script",t);o=new E.V_(r.args[0]).Encode(A)}else{if(void 0===r||"object"!==typeof r)throw new I("Wrong init parameter type, expected JSON Michelson",r);o=r}const i={code:t,storage:o},a={kind:s.Qg.ORIGINATION,fee:N,gas_limit:c,storage_limit:T,balance:d?e.toString():m("tz","mutez",e).toString(),script:i};return n&&(a.delegate=n),a})),h=({to:t,amount:r,parameter:e,fee:n=i.TRANSFER,gasLimit:A=o.TRANSFER,storageLimit:E=a.TRANSFER,mutez:N=!1})=>u(void 0,void 0,void 0,(function*(){return{kind:s.Qg.TRANSACTION,fee:n,gas_limit:A,storage_limit:E,amount:N?r.toString():m("tz","mutez",r).toString(),destination:t,parameters:e}})),L=({delegate:t,source:r,fee:e=i.DELEGATION,gasLimit:n=o.DELEGATION,storageLimit:A=a.DELEGATION})=>u(void 0,void 0,void 0,(function*(){return{kind:s.Qg.DELEGATION,source:r,fee:e,gas_limit:n,storage_limit:A,delegate:t}}));Error;Error;Error;Error;Error;Error;s.Qg.ACTIVATION,s.Qg.ORIGINATION,s.Qg.TRANSACTION,s.Qg.DELEGATION;Error;Error;Error;Error;Error;(0,A.X)();Error;Error}}]);