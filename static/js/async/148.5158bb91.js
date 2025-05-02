(self.webpackChunkbot = self.webpackChunkbot || []).push([
  ["148"],
  {
    99069: function (e, n, l) {
      "use strict";
      l.r(n), l.d(n, { default: () => a });
      let a =
        '<xml xmlns="https://developers.google.com/blockly/xml" is_dbot="true" collection="false">\n  <variables>\n    <variable id="xL#n*$V/G2mnQTxpEw$Z">Stake</variable>\n    <variable id="$68*z!dO|ZT~V6#FW8XN">entry_loop</variable>\n    <variable id="2fsi69b#+YPNS9Zix[-v">Take Profit</variable>\n    <variable id="+R;*DN.|9N![P;Y:Ahwb">Stop Loss</variable>\n    <variable id="@(K8+LZ-|UiG(,V/$We{">entry_point</variable>\n    <variable id="[13;h[Aa6^F?UtC#,Zr[">Martingale</variable>\n    <variable id="Y=b.m:UR1*1P_b!:c%Ak">win-stake</variable>\n  </variables>\n  <block type="trade_definition" id="1xUY@FfRRbB$T-92x;An" deletable="false" x="0" y="110">\n    <statement name="TRADE_OPTIONS">\n      <block type="trade_definition_market" id="At}}g.qISIJ+@QIJrldf" deletable="false" movable="false">\n        <field name="MARKET_LIST">synthetic_index</field>\n        <field name="SUBMARKET_LIST">random_index</field>\n        <field name="SYMBOL_LIST">1HZ100V</field>\n        <next>\n          <block type="trade_definition_tradetype" id="!:L[aT1lRE^@Yb}v@,41" deletable="false" movable="false">\n            <field name="TRADETYPECAT_LIST">digits</field>\n            <field name="TRADETYPE_LIST">overunder</field>\n            <next>\n              <block type="trade_definition_contracttype" id="q]U4=v]q`@UyK[XRuF4(" deletable="false" movable="false">\n                <field name="TYPE_LIST">DIGITOVER</field>\n                <next>\n                  <block type="trade_definition_candleinterval" id="t#Ls7%)0MeX%7Y#ag*YV" deletable="false" movable="false">\n                    <field name="CANDLEINTERVAL_LIST">60</field>\n                    <next>\n                      <block type="trade_definition_restartbuysell" id="QIPgLZ3ab=;IE2|={3@Q" deletable="false" movable="false">\n                        <field name="TIME_MACHINE_ENABLED">FALSE</field>\n                        <next>\n                          <block type="trade_definition_restartonerror" id="i8)Ct]SbIiR806X/-=T2" deletable="false" movable="false">\n                            <field name="RESTARTONERROR">TRUE</field>\n                          </block>\n                        </next>\n                      </block>\n                    </next>\n                  </block>\n                </next>\n              </block>\n            </next>\n          </block>\n        </next>\n      </block>\n    </statement>\n    <statement name="INITIALIZATION">\n      <block type="variables_set" id="+.^n1xieM`bTkTCqspvr">\n        <field name="VAR" id="xL#n*$V/G2mnQTxpEw$Z">Stake</field>\n        <value name="VALUE">\n          <block type="math_number" id="M@aZzIm9vJ|SF$}M_{Ns">\n            <field name="NUM">5</field>\n          </block>\n        </value>\n        <next>\n          <block type="variables_set" id="0ZT*z(`(y]jw7!^sp,hs">\n            <field name="VAR" id="2fsi69b#+YPNS9Zix[-v">Take Profit</field>\n            <value name="VALUE">\n              <block type="math_number" id="/=#Cl%mWi%YQ!s7^G{{R">\n                <field name="NUM">500</field>\n              </block>\n            </value>\n            <next>\n              <block type="variables_set" id="}w(m5!=ed)eR,n.2W#Ml">\n                <field name="VAR" id="+R;*DN.|9N![P;Y:Ahwb">Stop Loss</field>\n                <value name="VALUE">\n                  <block type="math_number" id="q-r-qDR{r9[=xlWmR4@h">\n                    <field name="NUM">1000</field>\n                  </block>\n                </value>\n                <next>\n                  <block type="variables_set" id="5N?J.j_J]sX03s+^*A-P">\n                    <field name="VAR" id="@(K8+LZ-|UiG(,V/$We{">entry_point</field>\n                    <value name="VALUE">\n                      <block type="math_number" id="$?c=egHj3+^Omn8#P:L)">\n                        <field name="NUM">2</field>\n                      </block>\n                    </value>\n                    <next>\n                      <block type="variables_set" id="9m=6%BP.$^`UzaJ0;bdS">\n                        <field name="VAR" id="[13;h[Aa6^F?UtC#,Zr[">Martingale</field>\n                        <value name="VALUE">\n                          <block type="math_number" id="!)7F+oyRF,3$m`hXj#XA">\n                            <field name="NUM">0.8</field>\n                          </block>\n                        </value>\n                        <next>\n                          <block type="variables_set" id=":-Fzh*U;ZLa]?)_m4X1a">\n                            <field name="VAR" id="Y=b.m:UR1*1P_b!:c%Ak">win-stake</field>\n                            <value name="VALUE">\n                              <block type="variables_get" id=":@rX`oBQonVr!7FL1O$K">\n                                <field name="VAR" id="xL#n*$V/G2mnQTxpEw$Z">Stake</field>\n                              </block>\n                            </value>\n                            <next>\n                              <block type="variables_set" id="}}?9}K`%|1HZ09pSocre">\n                                <field name="VAR" id="$68*z!dO|ZT~V6#FW8XN">entry_loop</field>\n                                <value name="VALUE">\n                                  <block type="logic_boolean" id="Wa-a/Bi/D`+:7$F(~)ZJ">\n                                    <field name="BOOL">TRUE</field>\n                                  </block>\n                                </value>\n                              </block>\n                            </next>\n                          </block>\n                        </next>\n                      </block>\n                    </next>\n                  </block>\n                </next>\n              </block>\n            </next>\n          </block>\n        </next>\n      </block>\n    </statement>\n    <statement name="SUBMARKET">\n      <block type="controls_if" id="dFWzq,?V.a3ykju{X`is" collapsed="true">\n        <value name="IF0">\n          <block type="logic_compare" id="K,Q+w54vne]K`9nqC`LG">\n            <field name="OP">EQ</field>\n            <value name="A">\n              <block type="variables_get" id="kI^Y9_SPmCo@1cy]mv*g">\n                <field name="VAR" id="$68*z!dO|ZT~V6#FW8XN">entry_loop</field>\n              </block>\n            </value>\n            <value name="B">\n              <block type="logic_boolean" id="k!Sw8#fmDe^tr^DvK!Jm">\n                <field name="BOOL">TRUE</field>\n              </block>\n            </value>\n          </block>\n        </value>\n        <statement name="DO0">\n          <block type="controls_repeat_ext" id="uqNrd]nF/=I8S/DG)$b9">\n            <value name="TIMES">\n              <block type="math_constant" id="%+0iSejEysu=|bfcy8!x">\n                <field name="CONSTANT">INFINITY</field>\n              </block>\n            </value>\n            <statement name="DO">\n              <block type="timeout" id="]4S$2U[]gaK8Pl(9N+Xf">\n                <statement name="TIMEOUTSTACK">\n                  <block type="notify" id="-Zw_?m6OCJ3NUFzr,tTs">\n                    <field name="NOTIFICATION_TYPE">success</field>\n                    <field name="NOTIFICATION_SOUND">silent</field>\n                    <value name="MESSAGE">\n                      <shadow type="text" id="cNZyzj|L2V,iX5v84U{#">\n                        <field name="TEXT">abc</field>\n                      </shadow>\n                      <block type="last_digit" id="rUnW-QH0,Z!|%6GFEr]z"></block>\n                    </value>\n                    <next>\n                      <block type="controls_if" id="qGHN:h_2#{aDZ/mf@(E~">\n                        <value name="IF0">\n                          <block type="logic_compare" id="UpZ!5o,~ZSfB]N@G`hl9">\n                            <field name="OP">EQ</field>\n                            <value name="A">\n                              <block type="variables_get" id="B.AQxd205cp-q*,1awst">\n                                <field name="VAR" id="@(K8+LZ-|UiG(,V/$We{">entry_point</field>\n                              </block>\n                            </value>\n                            <value name="B">\n                              <block type="last_digit" id="c6_J5QZ;wx_/VggFFMVw"></block>\n                            </value>\n                          </block>\n                        </value>\n                        <statement name="DO0">\n                          <block type="controls_flow_statements" id="9I(cCt7qqPe|2s5DDd5A">\n                            <field name="FLOW">BREAK</field>\n                          </block>\n                        </statement>\n                      </block>\n                    </next>\n                  </block>\n                </statement>\n                <value name="SECONDS">\n                  <block type="math_number" id="2J2{:qbO6NKR@;Or${Jb">\n                    <field name="NUM">0</field>\n                  </block>\n                </value>\n              </block>\n            </statement>\n          </block>\n        </statement>\n        <next>\n          <block type="trade_definition_tradeoptions" id="bTRRAtlrO1HOKPi6/(ac">\n            <mutation xmlns="http://www.w3.org/1999/xhtml" has_first_barrier="false" has_second_barrier="false" has_prediction="true"></mutation>\n            <field name="DURATIONTYPE_LIST">t</field>\n            <value name="DURATION">\n              <shadow type="math_number_positive" id="]P3h/-zY!Yl-puI51RL;">\n                <field name="NUM">1</field>\n              </shadow>\n            </value>\n            <value name="AMOUNT">\n              <shadow type="math_number_positive" id="@?@7pa:H:R02wwN+Gtci">\n                <field name="NUM">0.35</field>\n              </shadow>\n              <block type="variables_get" id="K/LRa(#^M@KlAy9qj.A]">\n                <field name="VAR" id="xL#n*$V/G2mnQTxpEw$Z">Stake</field>\n              </block>\n            </value>\n            <value name="PREDICTION">\n              <shadow type="math_number_positive" id="6A;((WX}04Ss~^R~[Ay^" inline="true">\n                <field name="NUM">3</field>\n              </shadow>\n            </value>\n          </block>\n        </next>\n      </block>\n    </statement>\n  </block>\n  <block type="during_purchase" id="ISWQlIq00VSpFAh2ZYG8" x="818" y="110">\n    <statement name="DURING_PURCHASE_STACK">\n      <block type="controls_if" id="!-@!13qFqkbot[NlF{qP" collapsed="true">\n        <value name="IF0">\n          <block type="check_sell" id=";BX4{|$aVogM?mZcgrOV"></block>\n        </value>\n      </block>\n    </statement>\n  </block>\n  <block type="after_purchase" id="[=/Str)J{-7##qUk0(^y" x="818" y="336">\n    <statement name="AFTERPURCHASE_STACK">\n      <block type="variables_set" id=")u;Zv6Gwi3$x,A=s.*S1">\n        <field name="VAR" id="$68*z!dO|ZT~V6#FW8XN">entry_loop</field>\n        <value name="VALUE">\n          <block type="logic_boolean" id="336}#8833u[zTO[^HeC*">\n            <field name="BOOL">FALSE</field>\n          </block>\n        </value>\n        <next>\n          <block type="controls_if" id="~peKIt3]^P`{LwabyAyd" collapsed="true">\n            <mutation xmlns="http://www.w3.org/1999/xhtml" elseif="1" else="1"></mutation>\n            <value name="IF0">\n              <block type="logic_compare" id="2bv)Ve=aQ{hLsc#u-GS-">\n                <field name="OP">GTE</field>\n                <value name="A">\n                  <block type="total_profit" id="Xc!.Oj-!$2f8M5|yB+]!"></block>\n                </value>\n                <value name="B">\n                  <block type="variables_get" id="Pw%+yEiTY+a2v1.ci(Du">\n                    <field name="VAR" id="2fsi69b#+YPNS9Zix[-v">Take Profit</field>\n                  </block>\n                </value>\n              </block>\n            </value>\n            <statement name="DO0">\n              <block type="text_print" id="PGu,2xeNPUg%03Hfl})U">\n                <value name="TEXT">\n                  <shadow type="text" id="O8eedvDW2FDNl?t-0FC6">\n                    <field name="TEXT">TP hit</field>\n                  </shadow>\n                </value>\n              </block>\n            </statement>\n            <value name="IF1">\n              <block type="logic_compare" id="+6H%05{o8Sx%]+DCtpI5">\n                <field name="OP">LTE</field>\n                <value name="A">\n                  <block type="total_profit" id="3m+!]HIc%~^Ra=,~0J%X"></block>\n                </value>\n                <value name="B">\n                  <block type="math_single" id="7Y0$=LBk+4R7[kN2sTNJ">\n                    <field name="OP">NEG</field>\n                    <value name="NUM">\n                      <shadow type="math_number" id="qh?kzgK*5x]w?-bM[*^5">\n                        <field name="NUM">9</field>\n                      </shadow>\n                      <block type="variables_get" id="^97~uUJqC{MI~W=vPES,">\n                        <field name="VAR" id="+R;*DN.|9N![P;Y:Ahwb">Stop Loss</field>\n                      </block>\n                    </value>\n                  </block>\n                </value>\n              </block>\n            </value>\n            <statement name="DO1">\n              <block type="text_print" id="xJgrrP*a|A)sqsoogxL$">\n                <value name="TEXT">\n                  <shadow type="text" id="N.k!4C!aMHf8zZNNmK,l">\n                    <field name="TEXT">SL hit</field>\n                  </shadow>\n                </value>\n              </block>\n            </statement>\n            <statement name="ELSE">\n              <block type="controls_if" id="WtQS#BHI6#qwECm@U:B)">\n                <mutation xmlns="http://www.w3.org/1999/xhtml" else="1"></mutation>\n                <value name="IF0">\n                  <block type="contract_check_result" id="D3`oAM.TEL*9gDNeGNX}">\n                    <field name="CHECK_RESULT">win</field>\n                  </block>\n                </value>\n                <statement name="DO0">\n                  <block type="variables_set" id="G.:0a8%I!A_7$6|{?VON">\n                    <field name="VAR" id="xL#n*$V/G2mnQTxpEw$Z">Stake</field>\n                    <value name="VALUE">\n                      <block type="variables_get" id="x!0Mn2D@$}XITUpK(ADG">\n                        <field name="VAR" id="Y=b.m:UR1*1P_b!:c%Ak">win-stake</field>\n                      </block>\n                    </value>\n                    <next>\n                      <block type="trade_again" id="oz.iat#Al#@C/4h97J[("></block>\n                    </next>\n                  </block>\n                </statement>\n                <statement name="ELSE">\n                  <block type="variables_set" id="16@^1R$Bd5-rL37afAH+">\n                    <field name="VAR" id="xL#n*$V/G2mnQTxpEw$Z">Stake</field>\n                    <value name="VALUE">\n                      <block type="math_arithmetic" id="{h2|A89x{7U^U2yy*[v%">\n                        <field name="OP">MULTIPLY</field>\n                        <value name="A">\n                          <shadow type="math_number" id="OIx7_~D!t}qV[~UfR=g8">\n                            <field name="NUM">1</field>\n                          </shadow>\n                          <block type="variables_get" id="[I0RZgmeC}d~(OoEV|TL">\n                            <field name="VAR" id="xL#n*$V/G2mnQTxpEw$Z">Stake</field>\n                          </block>\n                        </value>\n                        <value name="B">\n                          <shadow type="math_number" id="_*a#gzBNnb547Ju(]mDk">\n                            <field name="NUM">2</field>\n                          </shadow>\n                          <block type="variables_get" id="zJyv,18?av-_$|?k_;uA">\n                            <field name="VAR" id="[13;h[Aa6^F?UtC#,Zr[">Martingale</field>\n                          </block>\n                        </value>\n                      </block>\n                    </value>\n                    <next>\n                      <block type="trade_again" id="ZXyC~NF}tSBU5pPtZ]4R"></block>\n                    </next>\n                  </block>\n                </statement>\n              </block>\n            </statement>\n          </block>\n        </next>\n      </block>\n    </statement>\n  </block>\n  <block type="before_purchase" id="{;|=$fe~kz1zntrLFJ-n" deletable="false" x="0" y="1126">\n    <statement name="BEFOREPURCHASE_STACK">\n      <block type="purchase" id="1ou9Ph4nt5v1S]j$?rms">\n        <field name="PURCHASE_LIST">DIGITOVER</field>\n      </block>\n    </statement>\n  </block>\n</xml>';
    },
    44111: function (e, n, l) {
      "use strict";
      l.r(n), l.d(n, { default: () => a });
      let a =
        '<xml xmlns="https://developers.google.com/blockly/xml" is_dbot="true" collection="false">\n  <variables>\n    <variable id="xL#n*$V/G2mnQTxpEw$Z">Stake</variable>\n    <variable id="$68*z!dO|ZT~V6#FW8XN">entry_loop</variable>\n    <variable id="2fsi69b#+YPNS9Zix[-v">Take Profit</variable>\n    <variable id="+R;*DN.|9N![P;Y:Ahwb">Stop Loss</variable>\n    <variable id="@(K8+LZ-|UiG(,V/$We{">entry_point</variable>\n    <variable id="[13;h[Aa6^F?UtC#,Zr[">Martingale</variable>\n    <variable id="Y=b.m:UR1*1P_b!:c%Ak">win-stake</variable>\n  </variables>\n  <block type="trade_definition" id="1xUY@FfRRbB$T-92x;An" deletable="false" x="0" y="110">\n    <statement name="TRADE_OPTIONS">\n      <block type="trade_definition_market" id="At}}g.qISIJ+@QIJrldf" deletable="false" movable="false">\n        <field name="MARKET_LIST">synthetic_index</field>\n        <field name="SUBMARKET_LIST">random_index</field>\n        <field name="SYMBOL_LIST">1HZ25V</field>\n        <next>\n          <block type="trade_definition_tradetype" id="!:L[aT1lRE^@Yb}v@,41" deletable="false" movable="false">\n            <field name="TRADETYPECAT_LIST">digits</field>\n            <field name="TRADETYPE_LIST">overunder</field>\n            <next>\n              <block type="trade_definition_contracttype" id="q]U4=v]q`@UyK[XRuF4(" deletable="false" movable="false">\n                <field name="TYPE_LIST">DIGITOVER</field>\n                <next>\n                  <block type="trade_definition_candleinterval" id="t#Ls7%)0MeX%7Y#ag*YV" deletable="false" movable="false">\n                    <field name="CANDLEINTERVAL_LIST">60</field>\n                    <next>\n                      <block type="trade_definition_restartbuysell" id="QIPgLZ3ab=;IE2|={3@Q" deletable="false" movable="false">\n                        <field name="TIME_MACHINE_ENABLED">FALSE</field>\n                        <next>\n                          <block type="trade_definition_restartonerror" id="i8)Ct]SbIiR806X/-=T2" deletable="false" movable="false">\n                            <field name="RESTARTONERROR">TRUE</field>\n                          </block>\n                        </next>\n                      </block>\n                    </next>\n                  </block>\n                </next>\n              </block>\n            </next>\n          </block>\n        </next>\n      </block>\n    </statement>\n    <statement name="INITIALIZATION">\n      <block type="variables_set" id="+.^n1xieM`bTkTCqspvr">\n        <field name="VAR" id="xL#n*$V/G2mnQTxpEw$Z">Stake</field>\n        <value name="VALUE">\n          <block type="math_number" id="M@aZzIm9vJ|SF$}M_{Ns">\n            <field name="NUM">5</field>\n          </block>\n        </value>\n        <next>\n          <block type="variables_set" id="0ZT*z(`(y]jw7!^sp,hs">\n            <field name="VAR" id="2fsi69b#+YPNS9Zix[-v">Take Profit</field>\n            <value name="VALUE">\n              <block type="math_number" id="/=#Cl%mWi%YQ!s7^G{{R">\n                <field name="NUM">100</field>\n              </block>\n            </value>\n            <next>\n              <block type="variables_set" id="}w(m5!=ed)eR,n.2W#Ml">\n                <field name="VAR" id="+R;*DN.|9N![P;Y:Ahwb">Stop Loss</field>\n                <value name="VALUE">\n                  <block type="math_number" id="q-r-qDR{r9[=xlWmR4@h">\n                    <field name="NUM">100</field>\n                  </block>\n                </value>\n                <next>\n                  <block type="variables_set" id="5N?J.j_J]sX03s+^*A-P">\n                    <field name="VAR" id="@(K8+LZ-|UiG(,V/$We{">entry_point</field>\n                    <value name="VALUE">\n                      <block type="math_number" id="$?c=egHj3+^Omn8#P:L)">\n                        <field name="NUM">7</field>\n                      </block>\n                    </value>\n                    <next>\n                      <block type="variables_set" id="9m=6%BP.$^`UzaJ0;bdS">\n                        <field name="VAR" id="[13;h[Aa6^F?UtC#,Zr[">Martingale</field>\n                        <value name="VALUE">\n                          <block type="math_number" id="!)7F+oyRF,3$m`hXj#XA">\n                            <field name="NUM">0.7</field>\n                          </block>\n                        </value>\n                        <next>\n                          <block type="variables_set" id=":-Fzh*U;ZLa]?)_m4X1a">\n                            <field name="VAR" id="Y=b.m:UR1*1P_b!:c%Ak">win-stake</field>\n                            <value name="VALUE">\n                              <block type="variables_get" id=":@rX`oBQonVr!7FL1O$K">\n                                <field name="VAR" id="xL#n*$V/G2mnQTxpEw$Z">Stake</field>\n                              </block>\n                            </value>\n                            <next>\n                              <block type="variables_set" id="}}?9}K`%|1HZ09pSocre">\n                                <field name="VAR" id="$68*z!dO|ZT~V6#FW8XN">entry_loop</field>\n                                <value name="VALUE">\n                                  <block type="logic_boolean" id="Wa-a/Bi/D`+:7$F(~)ZJ">\n                                    <field name="BOOL">TRUE</field>\n                                  </block>\n                                </value>\n                              </block>\n                            </next>\n                          </block>\n                        </next>\n                      </block>\n                    </next>\n                  </block>\n                </next>\n              </block>\n            </next>\n          </block>\n        </next>\n      </block>\n    </statement>\n    <statement name="SUBMARKET">\n      <block type="controls_if" id="dFWzq,?V.a3ykju{X`is" collapsed="true">\n        <value name="IF0">\n          <block type="logic_compare" id="K,Q+w54vne]K`9nqC`LG">\n            <field name="OP">EQ</field>\n            <value name="A">\n              <block type="variables_get" id="kI^Y9_SPmCo@1cy]mv*g">\n                <field name="VAR" id="$68*z!dO|ZT~V6#FW8XN">entry_loop</field>\n              </block>\n            </value>\n            <value name="B">\n              <block type="logic_boolean" id="k!Sw8#fmDe^tr^DvK!Jm">\n                <field name="BOOL">TRUE</field>\n              </block>\n            </value>\n          </block>\n        </value>\n        <statement name="DO0">\n          <block type="controls_repeat_ext" id="uqNrd]nF/=I8S/DG)$b9">\n            <value name="TIMES">\n              <block type="math_constant" id="%+0iSejEysu=|bfcy8!x">\n                <field name="CONSTANT">INFINITY</field>\n              </block>\n            </value>\n            <statement name="DO">\n              <block type="timeout" id="]4S$2U[]gaK8Pl(9N+Xf">\n                <statement name="TIMEOUTSTACK">\n                  <block type="notify" id="-Zw_?m6OCJ3NUFzr,tTs">\n                    <field name="NOTIFICATION_TYPE">success</field>\n                    <field name="NOTIFICATION_SOUND">silent</field>\n                    <value name="MESSAGE">\n                      <shadow type="text" id="cNZyzj|L2V,iX5v84U{#">\n                        <field name="TEXT">abc</field>\n                      </shadow>\n                      <block type="last_digit" id="rUnW-QH0,Z!|%6GFEr]z"></block>\n                    </value>\n                    <next>\n                      <block type="controls_if" id="qGHN:h_2#{aDZ/mf@(E~">\n                        <value name="IF0">\n                          <block type="logic_compare" id="UpZ!5o,~ZSfB]N@G`hl9">\n                            <field name="OP">EQ</field>\n                            <value name="A">\n                              <block type="variables_get" id="B.AQxd205cp-q*,1awst">\n                                <field name="VAR" id="@(K8+LZ-|UiG(,V/$We{">entry_point</field>\n                              </block>\n                            </value>\n                            <value name="B">\n                              <block type="last_digit" id="c6_J5QZ;wx_/VggFFMVw"></block>\n                            </value>\n                          </block>\n                        </value>\n                        <statement name="DO0">\n                          <block type="controls_flow_statements" id="9I(cCt7qqPe|2s5DDd5A">\n                            <field name="FLOW">BREAK</field>\n                          </block>\n                        </statement>\n                      </block>\n                    </next>\n                  </block>\n                </statement>\n                <value name="SECONDS">\n                  <block type="math_number" id="2J2{:qbO6NKR@;Or${Jb">\n                    <field name="NUM">0</field>\n                  </block>\n                </value>\n              </block>\n            </statement>\n          </block>\n        </statement>\n        <next>\n          <block type="trade_definition_tradeoptions" id="bTRRAtlrO1HOKPi6/(ac">\n            <mutation xmlns="http://www.w3.org/1999/xhtml" has_first_barrier="false" has_second_barrier="false" has_prediction="true"></mutation>\n            <field name="DURATIONTYPE_LIST">t</field>\n            <value name="DURATION">\n              <shadow type="math_number_positive" id="]P3h/-zY!Yl-puI51RL;">\n                <field name="NUM">1</field>\n              </shadow>\n            </value>\n            <value name="AMOUNT">\n              <shadow type="math_number_positive" id="@?@7pa:H:R02wwN+Gtci">\n                <field name="NUM">0.35</field>\n              </shadow>\n              <block type="variables_get" id="K/LRa(#^M@KlAy9qj.A]">\n                <field name="VAR" id="xL#n*$V/G2mnQTxpEw$Z">Stake</field>\n              </block>\n            </value>\n            <value name="PREDICTION">\n              <shadow type="math_number_positive" id="}!H]{1cFD-lwfop@y{sn" inline="true">\n                <field name="NUM">2</field>\n              </shadow>\n            </value>\n          </block>\n        </next>\n      </block>\n    </statement>\n  </block>\n  <block type="during_purchase" id="ISWQlIq00VSpFAh2ZYG8" x="818" y="110">\n    <statement name="DURING_PURCHASE_STACK">\n      <block type="controls_if" id="!-@!13qFqkbot[NlF{qP" collapsed="true">\n        <value name="IF0">\n          <block type="check_sell" id=";BX4{|$aVogM?mZcgrOV"></block>\n        </value>\n      </block>\n    </statement>\n  </block>\n  <block type="after_purchase" id="[=/Str)J{-7##qUk0(^y" x="818" y="336">\n    <statement name="AFTERPURCHASE_STACK">\n      <block type="variables_set" id=")u;Zv6Gwi3$x,A=s.*S1">\n        <field name="VAR" id="$68*z!dO|ZT~V6#FW8XN">entry_loop</field>\n        <value name="VALUE">\n          <block type="logic_boolean" id="336}#8833u[zTO[^HeC*">\n            <field name="BOOL">FALSE</field>\n          </block>\n        </value>\n        <next>\n          <block type="controls_if" id="~peKIt3]^P`{LwabyAyd" collapsed="true">\n            <mutation xmlns="http://www.w3.org/1999/xhtml" elseif="1" else="1"></mutation>\n            <value name="IF0">\n              <block type="logic_compare" id="2bv)Ve=aQ{hLsc#u-GS-">\n                <field name="OP">GTE</field>\n                <value name="A">\n                  <block type="total_profit" id="Xc!.Oj-!$2f8M5|yB+]!"></block>\n                </value>\n                <value name="B">\n                  <block type="variables_get" id="Pw%+yEiTY+a2v1.ci(Du">\n                    <field name="VAR" id="2fsi69b#+YPNS9Zix[-v">Take Profit</field>\n                  </block>\n                </value>\n              </block>\n            </value>\n            <statement name="DO0">\n              <block type="text_print" id="PGu,2xeNPUg%03Hfl})U">\n                <value name="TEXT">\n                  <shadow type="text" id="O8eedvDW2FDNl?t-0FC6">\n                    <field name="TEXT">TP hit</field>\n                  </shadow>\n                </value>\n              </block>\n            </statement>\n            <value name="IF1">\n              <block type="logic_compare" id="+6H%05{o8Sx%]+DCtpI5">\n                <field name="OP">LTE</field>\n                <value name="A">\n                  <block type="total_profit" id="3m+!]HIc%~^Ra=,~0J%X"></block>\n                </value>\n                <value name="B">\n                  <block type="math_single" id="7Y0$=LBk+4R7[kN2sTNJ">\n                    <field name="OP">NEG</field>\n                    <value name="NUM">\n                      <shadow type="math_number" id="qh?kzgK*5x]w?-bM[*^5">\n                        <field name="NUM">9</field>\n                      </shadow>\n                      <block type="variables_get" id="^97~uUJqC{MI~W=vPES,">\n                        <field name="VAR" id="+R;*DN.|9N![P;Y:Ahwb">Stop Loss</field>\n                      </block>\n                    </value>\n                  </block>\n                </value>\n              </block>\n            </value>\n            <statement name="DO1">\n              <block type="text_print" id="xJgrrP*a|A)sqsoogxL$">\n                <value name="TEXT">\n                  <shadow type="text" id="N.k!4C!aMHf8zZNNmK,l">\n                    <field name="TEXT">SL hit</field>\n                  </shadow>\n                </value>\n              </block>\n            </statement>\n            <statement name="ELSE">\n              <block type="controls_if" id="WtQS#BHI6#qwECm@U:B)">\n                <mutation xmlns="http://www.w3.org/1999/xhtml" else="1"></mutation>\n                <value name="IF0">\n                  <block type="contract_check_result" id="D3`oAM.TEL*9gDNeGNX}">\n                    <field name="CHECK_RESULT">win</field>\n                  </block>\n                </value>\n                <statement name="DO0">\n                  <block type="variables_set" id="G.:0a8%I!A_7$6|{?VON">\n                    <field name="VAR" id="xL#n*$V/G2mnQTxpEw$Z">Stake</field>\n                    <value name="VALUE">\n                      <block type="variables_get" id="x!0Mn2D@$}XITUpK(ADG">\n                        <field name="VAR" id="Y=b.m:UR1*1P_b!:c%Ak">win-stake</field>\n                      </block>\n                    </value>\n                    <next>\n                      <block type="trade_again" id="oz.iat#Al#@C/4h97J[("></block>\n                    </next>\n                  </block>\n                </statement>\n                <statement name="ELSE">\n                  <block type="variables_set" id="16@^1R$Bd5-rL37afAH+">\n                    <field name="VAR" id="xL#n*$V/G2mnQTxpEw$Z">Stake</field>\n                    <value name="VALUE">\n                      <block type="math_arithmetic" id="{h2|A89x{7U^U2yy*[v%">\n                        <field name="OP">MULTIPLY</field>\n                        <value name="A">\n                          <shadow type="math_number" id="OIx7_~D!t}qV[~UfR=g8">\n                            <field name="NUM">1</field>\n                          </shadow>\n                          <block type="variables_get" id="[I0RZgmeC}d~(OoEV|TL">\n                            <field name="VAR" id="xL#n*$V/G2mnQTxpEw$Z">Stake</field>\n                          </block>\n                        </value>\n                        <value name="B">\n                          <shadow type="math_number" id="_*a#gzBNnb547Ju(]mDk">\n                            <field name="NUM">2</field>\n                          </shadow>\n                          <block type="variables_get" id="zJyv,18?av-_$|?k_;uA">\n                            <field name="VAR" id="[13;h[Aa6^F?UtC#,Zr[">Martingale</field>\n                          </block>\n                        </value>\n                      </block>\n                    </value>\n                    <next>\n                      <block type="trade_again" id="ZXyC~NF}tSBU5pPtZ]4R"></block>\n                    </next>\n                  </block>\n                </statement>\n              </block>\n            </statement>\n          </block>\n        </next>\n      </block>\n    </statement>\n  </block>\n  <block type="before_purchase" id="{;|=$fe~kz1zntrLFJ-n" deletable="false" x="0" y="1126">\n    <statement name="BEFOREPURCHASE_STACK">\n      <block type="purchase" id="1ou9Ph4nt5v1S]j$?rms">\n        <field name="PURCHASE_LIST">DIGITOVER</field>\n      </block>\n    </statement>\n  </block>\n</xml>';
    },
    37672: function (e, n, l) {
      var a = {
        "./2025\uD83D\uDCC8\uD83D\uDCC9Dp  Printer Version1.xml": "99069",
        "./2025 No Martngale bot free.xml": "28826",
        "./Alpha Ai  Two Predictions .xml": "56815",
        "./2025 UPDATED DIGIT EVEN Version Bot\uD83D\uDCC8\uD83D\uDCC9.xml":
          "95897",
        "./2 2025 Updated Expert Speed Bot  Version \uD83D\uDCC9\uD83D\uDCC9\uD83D\uDCC9\uD83D\uDCC8\uD83D\uDCC8\uD83D\uDCC8 (1) (1).xml":
          "97354",
        "./3 2025 Updated Version Of Candle Mine\uD83C\uDDEC\uD83C\uDDE7.xml":
          "91837",
        "./Dp Entry point Bot V1.xml": "44111",
        "./OVER1 BOT WITH OVER3 REVOVERY .xml": "87378",
        "./2025 Binary Expert  Version pro .xml": "22642",
        "./2025 Alpha Version 2025.xml": "18117",
        "./2025 Updated Binary V5 Expert pro .xml": "13309",
        "./1 2025 $Orginal DollarPrinterBot  2025 Version $ (1).xml": "88078",
        "./2025 BOT - 0008 - Over Under (1).xml": "6056",
      };
      function t(e) {
        return Promise.resolve().then(function () {
          if (!l.o(a, e)) {
            var n = Error("Cannot find module '" + e + "'");
            throw ((n.code = "MODULE_NOT_FOUND"), n);
          }
          return l(a[e]);
        });
      }
      (t.keys = () => Object.keys(a)), (t.id = 37672), (e.exports = t);
    },
    65887: function (e, n, l) {
      var a = {
        "./1 2025 $Orginal DollarPrinterBot  2025 Version $ (1).xml": "88078",
        "./2 2025 Updated Expert Speed Bot  Version \uD83D\uDCC9\uD83D\uDCC9\uD83D\uDCC9\uD83D\uDCC8\uD83D\uDCC8\uD83D\uDCC8 (1) (1).xml":
          "97354",
        "./2025 Alpha Version 2025.xml": "18117",
        "./2025 BOT - 0008 - Over Under (1).xml": "6056",
        "./2025 Binary Expert  Version pro .xml": "22642",
        "./2025 No Martngale bot free.xml": "28826",
        "./2025 UPDATED DIGIT EVEN Version Bot\uD83D\uDCC8\uD83D\uDCC9.xml":
          "95897",
        "./2025 Updated Binary V5 Expert pro .xml": "13309",
        "./2025\uD83D\uDCC8\uD83D\uDCC9Dp  Printer Version1.xml": "99069",
        "./3 2025 Updated Version Of Candle Mine\uD83C\uDDEC\uD83C\uDDE7.xml":
          "91837",
        "./Alpha Ai  Two Predictions .xml": "56815",
        "./Dp Entry point Bot V1.xml": "44111",
        "./OVER1 BOT WITH OVER3 REVOVERY .xml": "87378",
      };
      function t(e) {
        return l(i(e));
      }
      function i(e) {
        if (!l.o(a, e)) {
          var n = Error("Cannot find module '" + e + "'");
          throw ((n.code = "MODULE_NOT_FOUND"), n);
        }
        return a[e];
      }
      (t.keys = function () {
        return Object.keys(a);
      }),
        (t.resolve = i),
        (e.exports = t),
        (t.id = 65887);
    },
    2810: function (e, n, l) {
      "use strict";
      l.r(n), l.d(n, { default: () => c });
      var a = l(85893),
        t = l(67294),
        i = l(96877),
        d = l(45221),
        o = l(83274),
        m = l(48059),
        b = l(24335),
        s = l(88199);
      let c = (0, i.Pi)(() => {
        let { dashboard: e } = (0, o.oR)(),
          { setActiveTab: n } = e,
          { BOT_BUILDER: i } = b.ve,
          [c, r] = (0, t.useState)(null),
          [f, k] = (0, t.useState)(!1),
          [p, v] = (0, t.useState)([]),
          _ = (e) =>
            e
              .replace(".xml", "")
              .split("_")
              .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
              .join(" "),
          u = (e) => `Trading strategy using the ${e} system`;
        (0, t.useEffect)(() => {
          (async () => {
            try {
              let e = l(65887)
                .keys()
                .map((e) => {
                  let n = e.replace("./", ""),
                    l = n.replace(".xml", ""),
                    a = _(n);
                  return { id: l, name: a, description: u(a), filename: n };
                });
              v(e);
            } catch (e) {
              console.error("Failed to load XML files:", e), v([]);
            }
          })();
        }, []);
        let y = (e) => {
          r(e),
            k(!0),
            n(i),
            setTimeout(() => {
              l(37672)(`./${e.filename}`)
                .then((n) => {
                  let a = n.default || n;
                  Promise.resolve()
                    .then(l.bind(l, 88199))
                    .then((n) => {
                      var l;
                      let { load: t } = n;
                      t({
                        block_string: a,
                        file_name: e.name,
                        strategy_id: e.id,
                        workspace:
                          null === (l = window.Blockly) || void 0 === l
                            ? void 0
                            : l.derivWorkspace,
                        from: s.save_types.LOCAL,
                        drop_event: null,
                        showIncompatibleStrategyDialog: !0,
                      });
                    });
                })
                .catch((e) => {
                  console.error("Failed to load XML file:", e);
                })
                .finally(() => {
                  k(!1);
                });
            }, 500);
        };
        return (0, a.jsxs)("div", {
          className: "bots-page",
          children: [
            (0, a.jsxs)("div", {
              className: "bots-page__header",
              children: [
                (0, a.jsx)("h2", {
                  children: (0, m.NC)("Trading Bots Library"),
                }),
                (0, a.jsx)("p", {
                  children: (0, m.NC)(
                    "Click on a bot to load it in the Bot Builder"
                  ),
                }),
              ],
            }),
            (0, a.jsx)("div", {
              className: "bots-page__list-container",
              style: {
                height: "calc(100vh - 150px)",
                overflowY: "scroll",
                padding: "0 16px 16px 16px",
              },
              children: (0, a.jsx)("div", {
                className: "bots-page__list",
                style: { paddingBottom: "30px" },
                children:
                  p.length > 0
                    ? p.map((e) =>
                        (0, a.jsxs)(
                          "div",
                          {
                            className: `bots-page__item ${
                              (null == c ? void 0 : c.id) === e.id
                                ? "bots-page__item--selected"
                                : ""
                            }`,
                            onClick: () => !f && y(e),
                            children: [
                              (0, a.jsx)("div", {
                                className: "bots-page__item-header",
                                children: (0, a.jsx)("h3", {
                                  children: e.name,
                                }),
                              }),
                              (0, a.jsx)("p", {
                                className: "bots-page__item-description",
                                children: e.description,
                              }),
                              (0, a.jsx)(d.Z, {
                                primary: !0,
                                className: "bots-page__load-button",
                                text:
                                  f && (null == c ? void 0 : c.id) === e.id
                                    ? (0, m.NC)("Loading...")
                                    : (0, m.NC)("Load Bot"),
                                is_loading:
                                  f && (null == c ? void 0 : c.id) === e.id,
                                onClick: (n) => {
                                  n.stopPropagation(), f || y(e);
                                },
                              }),
                            ],
                          },
                          e.id
                        )
                      )
                    : (0, a.jsx)("div", {
                        className: "bots-page__empty",
                        children: (0, m.NC)(
                          "No trading bots found. Please ensure there are XML files in the xml directory."
                        ),
                      }),
              }),
            }),
          ],
        });
      });
    },
  },
]);
