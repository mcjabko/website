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
          hráčům, je důležité dodržovat pravidla!
        </p>
        <ol className="list-decimal">
          <li>
            Je nepřípustné cílené zpomalovat, či jinak ovlivňovat chod
            infrastruktury serveru.
          </li>
          <li>
            Griefing, to znamená, ničení, staveb a jiné narušování staveb cizích
            hráčů bez povolení je přísně zakázán!
          </li>
          <li>
            Je zakázáno, jakkoliv urážet, narážet, zmiňovat, stavět či jinými
            způsoby vyjadřovat, propagovat a podporovat, rasismus, genocidu,
            válečné zločiny a jakékoliv protiprávní jednání v rámci zákonů České
            a Slovenské republiky.
          </li>
          <li> Každý hráč ručí za zabezpečení svého uživatelského účtu!</li>
          <li> Je zakázáno jakkoliv obcházet ban!</li>
          <li>
            Jakýkoliv pokyn člena Admin teamu (Majitel, Vedení, Hlavní Support,
            Support či Zkušební Support), musí být bezodkladně uposlechnut!
          </li>
          <li>
            Admin team má právo, jakkoliv potrestat či omezit jakéhokoliv
            uživatele i v případě neporušení specifického pravidla, pokud jedná
            v zájmu zachování bezpečnosti, férovosti či klidného pobytu
            ostatních uživatelů na serveru.
          </li>
          <li>
            Je zakázáno jakýmkoliv způsobem podvádět/získávat výhody nad
            ostatními hráči.
          </li>
          <li>
            Použití jakéhokoliv dupe glitche, hack clienta, zvýhodňujícího
            texture packu, a další modifikací (může být trestáno banem)
          </li>
          <li>
            Je zakázáno v chatu užívat vulgarismů, nevhodných slov a výrazů či
            sexuálních narážek!Výjimka platí od 22:00 do <strong>4:00</strong>,
            avšak pouze v přiměřené míře a v součásti konverzace!
          </li>
          <li>
            Je zakázáno jakkoli slovně napadat, urážet či jinak útočit na
            ostatní hráče!
          </li>
          <li>
            Je zakázáno jakkoli žádat o věci či jiné výhody členy A-teamu ( tj.
            fly, creative, OP aj.)!
          </li>
          <li>Spam v chatu nebo v soukromých zprávách je zakázán!</li>
          <li>
            Je zakázáno využívat veškerých bugů hry! Hráč je povinen takový bug
            bezodkladně nahlásit členovi A-teamu!
          </li>
          <li>
            Server neručí za ztracené věci vlivem teleportace na jiného hráče,
            chybou hráče, lagem hry na straně hráře či výpadkem připojení daného
            hráče.
          </li>
          <li>Každý hráč má povinnost nahlásit hráče porušujícího pravidla!</li>
          <li> Nabádání jiných hráčů k porušování pravidel je zakázáno!</li>
          <li>
            Je zakázáno jakkoli propagovat, tvořit reklamu, nabádat a
            doporučovat jiné minecraft servery, discord servery, nebo jakékoliv
            jiné produkty prostřednictvím serveru!
          </li>
          <li>
            Admin Team má právo hráči, který byl zabanován za zneužívání bugů
            hry, podvádění (jakýmikoliv způsobem) a griefing, vymazat inventář a
            zabavit veškerý majtek.
          </li>
          <li>Je zakázáno jakkoliv ničit hlavní ostrov v endu!</li>
          <li> Je zakázáno stavět jakékoliv farmy v endu!</li>
          <li>
            Je zakázáno narušovat ráz krajiny nesmyslnými stavbami, tj. sloupy,
            plošinami, létajícími stromy a jakékoliv jiné narušování!
          </li>
          <li>
            Je zakázáno zabíjet hráče v zájmu získání jejich věcí. Toto neplatí
            pouze v PvP aréně!
          </li>
          <li>
            Každý hráč má nárok na plochu 300×300 blocků kolem jeho domu. Toto
            pásmo nesmí jiný hráč bez povolení narušit!
          </li>
          <li>
            Za ztracené věci na bojišti Admin team neručí a hráči si je nejsou
            povinni vracet.
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
