import { PageLayout } from "@/layouts/PageLayout";
import { type NextPage } from "next";
import React from "react";

const RulesPage: NextPage = () => {
  return (
    <PageLayout
      title="Pravidla"
      description="Pravidla jsou velice důležitá pro klidné hraní. Pokud je však porušíš trest tě nemine."
    >
      <div className="lg:p-10 lg:shadow-lg">
        <p className="my-3 text-center">
          Jelikož chceme na našem serveru udržovat férovou a příjemnou hru všem
          hráčům, je důležité dodržovat závazná pravidla!
        </p>
        <h3 className="font-bold">
          A. Obecná pravidla platící na všech světech MCJabko.cz, dále jen
          &ldquo;server&rdquo;.
        </h3>
        <ol>
          <li>
            Od všech uživatelů je očekáván respekt k infrastruktuře serveru
            <ol>
              <li>
                To znamená že je nepřípustné jakkoliv napadat, cílené
                zpomalovat, narušovat provoz, či jinak ovlivňovat chod
                infrastruktury serveru, DDOs útoky, neoprávněnými přístupy,
                stavbou cíleně nákladných staveb na výkon serveru přímo vně
                serveru, nebo jinými fyzickými nebo logickými způsoby.
              </li>
              <li>
                Pokud člen Admin teamu usoudí že stavba hráče narušuje chod
                serveru, je oprávněn ji zničit.
              </li>
            </ol>
          </li>

          <li>
            Je zakázáno, jakkoliv urážet, narážet, zmiňovat, stavět či jinými
            způsoby vyjadřovat, propagovat a podporovat, rasismus, genocidu,
            válečné zločiny a jakékoliv protiprávní jednání v rámci zákonů České
            a Slovenské republiky!
          </li>
          <li>
            Každý hráč ručí za zabezpečení svého uživatelského účtu!
            <ol>
              <li>
                Od chvíle, kdy se uživatelský účet zaregistruje na našem serveru
                zodpovídá jeho uživatel za dostatečně silné heslo, za jakékoliv
                akce provedené prostřednictvím tohoto účtu.
              </li>
              <li>
                Každý uživatel má právo vlastnit jen a pouze jeden uživatelský
                účet vázaný na jeho IP adresu, výjimkou je sdílená domácnost s
                členem rodiny či duplicitní IP adresa v rámci poskytovatele
                internetu, v případě připojení jiného účtu na stejné IP adrese
                na které byl uložen ban je Admin team v případech, kdy je
                pravděpodobné že se jedná o obcházení banu, oprávněn uložit
                permanentní IP ban a uživatel musí doložit důkaz o opaku.
              </li>
            </ol>
          </li>
          <li>Je zakázáno jakkoliv obcházet ban!</li>
          <li>
            Jakýkoliv pokyn člena Admin teamu (Majitel, Vedení, Hlavní Support,
            Support či Zkušební Support), musí být bezodkladně uposlechnut!
            <ol>
              <li>
                Admin team má právo, jakkoliv potrestat či omezit jakéhokoliv
                uživatele i v případě neporušení specifického pravidla, pokud
                jedná v zájmu zachování bezpečnosti, férovosti či klidného
                pobytu ostatních uživatelů na serveru.
              </li>
              <li>
                Pokud hráč usoudí, že člen Admin teamu jedná v rozporu s
                pravidly a je zjevné že není ani oprávněn jednat dle pravidla je
                oprávněn jej nahlásit vyšší funkci, nebo pomocí ticketu, kdy
                bude s daným členem Admin teamu zahájeno šetření a dokazování
                skutečností, pokud se Admin team jako celek shodne na tom že
                daný člen Admin teamu jednal v rozporu s pravidly, bude náležitě
                potrestán či zbaven funkce.
              </li>
            </ol>
          </li>
          <li>
            Je zakázáno jakýmkoliv způsobem podvádět/získávat výhody nad
            ostatními hráči.
            <ol>
              <li>
                Použití jakéhokoliv dupe glitche, hack clienta, zvýhodňujícího
                texture packu, a další modifikací (může být trestáno banen)
              </li>
              <li>Pokud si nejste jisti kontaktujte nás na discordu</li>
            </ol>
          </li>
          <li>
            Je zakázáno v chatu užívat vulgarismů, nevhodných slov a výrazů či
            sexuálních narážek!
            <ol>
              <li>
                Výjimka platí od 22:00 do 6:00, avšak pouze v přiměřené míře a v
                součásti konverzace! Náhodné vykřikování sprostých slov či
                urážek nebude tolerováno!
              </li>
            </ol>
          </li>
          <li>
            Je zakázáno jakkoli slovně napadat, urážet či jinak útočit na
            ostatní hráče a členy A-teamu!
          </li>
          <li>
            Je zakázáno jakkoli žádat o věci či jiné výhody členy A-teamu ( tj.
            fly, creative, OP aj.)!
          </li>
          <li>
            Absolutní zákaz stavby, pojmenovávání, zmiňování v chatu, nebo
            jakékoliv vyobrazování jakýmikoliv prostředky totalitní ideologie,
            jejich zastupitele, zastánce atp., zejména fašismu, nacismu a
            komunismu! Výjimkou je pouze informativní styl diskuze v chatu.
          </li>
          <li>Spam v chatu nebo v soukromých zprávách je zakázán!</li>
          <li>
            Je zakázáno využívat veškerých bugů (a podobné jako clay bug)! Hráč
            je povinen takový bug bezodkladně nahlásit členovi A-teamu!
          </li>
          <li>
            Je zakázáno jakkoliv zpomalovat server pomocí nadměrného chovu
            zvířat v takovém stylu, kdy se jejich hitboxy protínají, stavbou
            tzv. „Lag Machines“, létajícími stroji, podpalování lesů, přehnaně
            velkými farmami atd.! Třídičky nesmí překročit 10 třídících členů na
            chunk!
          </li>
          <li>
            Server neručí za ztracené věci vlivem teleportace na jiného hráče,
            chybou hráče, lagem hry na straně clienta či výpadkem připojení
            daného hráče.
            <ol>
              <li>
                Výjimkou je chyba na straně serveru či při ztrátě při
                teleportaci za cílem obchodu!
              </li>
            </ol>
          </li>
          <li>Každý hráč má povinnost nahlásit hráče porušujícího pravidla!</li>
          <li>Nabádání jiných hráčů k porušování pravidel je zakázáno!</li>
          <li>
            Je zakázáno jakkoli propagovat, tvořit reklamu, nabádat a
            doporučovat jiné minecraft servery, discord servery, nebo jakékoliv
            jiné produkty prostřednictvím serveru, či discord serveru.
          </li>
          <li>
            Zároveň je zakázáno tak činit v soukromých zprávách rozesílaných
            členům serverů MCJabko, to znamnená discord, TS3, minecraft či
            jakékoliv jiné servery spadající pod MCJabko.cz
          </li>
          <li>
            Admin Team má právo hráči, který byl zabanován za zneužívání bugů
            hry, podvádění (jakýmikoliv způsobem) a griefing, vymazat inventář a
            zabavit veškerý majtek.
            <ol>
              <li>
                Veškeré zabavené předměty jsou členové Admin Teamu povinni
                trvale zničit.
              </li>
              <li>Toto pravidlo lze uplatnit i po uplynutí trestu.</li>
            </ol>
          </li>
        </ol>

        <h3 className="mt-5 font-bold">
          B. Pravidla zeleného a fialového světa
        </h3>
        <ol>
          <li>
            Griefing, to znamená, ničení, stavba a jiné narušování staveb cizích
            hráčů bez povolení je přísně zakázán!
          </li>
          <li>Je zakázáno jakkoliv ničit hlavní ostrov v endu!</li>
          <li>Je zakázáno stavět jakékoliv farmy v endu!</li>
          <li>
            Je zakázáno narušovat ráz krajiny nesmyslnými stavbami, tj. sloupy,
            plošinami, létajícími stromy a jakékoliv jiné narušování!
          </li>
          <li>
            Je zakázáno zabíjet hráče v zájmu získání jejich věcí. Toto neplatí
            pouze v PvP aréně!
          </li>
          <li>
            Pokud dva hráči dospějí k dohodě, kdy si po vzájemném souboji v PvP
            aréně vrátí věci a jedna ze stran tuto dohodu poruší, jedná se o
            krádež a bude tak i trestána dle platných pravidel!
            <ol>
              <li>
                Pokud k takovéto dohodě dojde mezi, dvěma hráči a do souboje se
                připojí jiný hráč, popřípadě více hráčů, jsou hráči, kteří
                dohodu uzavřeli povinni dané hráče upozornit na danou
                skutečnost, a to i klidně zpětně, nejdéle však 30minut po
                skončení souboje.
              </li>
              <li>
                Hráč, který nebyl zahrnut v dohodě má právo si vyžádat důkaz v
                podobě screenu konverzace.
              </li>
              <li>
                V takovém případě je hráč, nebo hráči, kteří nebyli původně
                zahrnuti v dohodě povinni vrátit účastníkům jejich věci, pokud
                tak neučiní jedná se o krádež! V opačném případě si může věci
                ponechat.
              </li>
              <li>
                Pokud Hráč číslo 1, který byl domluven na souboji s hráčem
                číslo2, zautočí na kohokoliv jiného, napadený hráč nemusí brát
                dohodu v potaz, a má právo se bránit!
              </li>
            </ol>
          </li>
          <li>
            Každý hráč má nárok na plochu 300×300 blocků kolem jeho domu. Toto
            pásmo nesmí jiný hráč bez povolení narušit!
            <ol>
              <li>
                Pokud dojde k situaci, kdy není zjevné, jaký hráč je oprávněn na
                tento prostor, se pro určení oprávněného nárokovatele stanovuje
                nejdříve postavená bedna z obou hráčů.
              </li>
              <li>
                I v případě, kdy o sobě dva, nebo více hráčů s protínajícími-se
                zónami o sobě navzájem nevěděli, jsou povinni mezi sebou dospět
                k dohodě a stanovit si vlastní hranice nárokovaného území.
              </li>
              <li>
                V opačném případě a za předpokladu, že zde daní hráči pobývali
                delší dobu, danou hranici stanoví člen admin teamu.
              </li>
              <li>
                Pokud však jeden z hráčů strávil v dané zóně výrazně krátkou
                dobu a zároveň bude jedna strana odmítat dohodu, bude daný hráč
                vykázán bez nároku na náhradu škody tím způsobené!
              </li>
            </ol>
          </li>
          <li>
            Hráč si nesmí bez povolení majitele objektu / pozemku nastavit
            lokaci „home“ na daném území!
          </li>
        </ol>

        <h3 className="mt-5 font-bold">Pravidla PvP Arény</h3>
        <ol>
          <li>
            Je zakázáno používat Elytry, raketky, ender perly, chorus fruit,
            totem of undying a jakékoliv efekty uvnitř arény(to znamená i notch
            a golden apples)!
          </li>
          <li>
            Za ztracené věci na bojišti Admin team neručí a hráči si je nejsou
            povinni vracet. To neplatí, v případě, pokud se hráči jasně předem
            domluví ve veřejném chatu nebo v /msg.
          </li>
          <li>
            Je zakázán tzv. combat logging. To je odpojování se ze serveru
            uprostřed probíhajícího boje!
          </li>
        </ol>
        <p className="my-5">
          Pravidla serveru jsou platná pro všechny hráče, včetně hráčů, kteří
          přispěli na chod serveru zakoupením sponzora, nebo jiných služeb. V
          případě porušení pravidel, hrozí trest dle uvážení Administrátora,
          supporta, nebo jiného člena Admin teamu. V případě zabanování, nebo
          jiného trestu, nemáte nárok na vrácení peněz z vašich příspěvků! S
          připojením na server mc.mcjabko.cz souhlasíš s těmito pravidly!
        </p>
      </div>
    </PageLayout>
  );
};

export default RulesPage;
