import { PageLayout } from "@/Layouts/PageLayout";
import React from "react";

const AboutPage = () => {
  return (
    <PageLayout
      title="O nás"
      description="Zde nalezneš stručnou historii serveru, naši filozofii a další zajímavosti."
    >
      <h3 className="font-bold mt-5">Stručná historie našeho serveru</h3>
      <p>
        Server MCJabko vznikl již v roce 2012 jako server pro pár lidí. Až v
        roce 2014 byl znovu otevřen. Jeho majitel byl tenkrát Grip2012. Server
        fungoval na snapshotu verze 1.8 a dosáhl celkem slušného úspěchu. Server
        byl uzavřen v roce 2016.
      </p>

      <h3 className="font-bold mt-5">Ale od října roku 2017…</h3>
      <p>
        Je opět v chodu pod mým vedením. Server hostujeme na VPS serveru u
        společnosti Contabo.
      </p>

      <h3 className="font-bold mt-5">Rok radosti a smutku…</h3>
      <p>
        Návštěvnost na serveru roste a klesá jako na horské dráze. Někdy se
        dokonce dostaneme na plné sloty. Bohužel kolem května roku 2018 hráčů na
        server rapidně ubývá a server tak upadá v zapomnění. O prázdninách jsme
        se přesunuli na vlastní hardware a snížily jsme tak náklady na server.
      </p>
      <h3>Úpadek, zapomenutí a možná kdo ví?</h3>
      <p>
        Bohužel ani v roce 2019 se situace na serveru nezlepšuje, ba naopak
        zhoršuje server je chvílemi dokonce prázdný. Ale kdo ví… co se letos
        ještě stane…
      </p>

      <h3 className="font-bold mt-5">Krize</h3>
      <p>
        Konec roku 2019 a následující začátek roku 2020 byl pro náš server
        velice dynamickým a bouřlivím obdobím. Vznikalo a zaniklo mnoho projektů
        a někdy se dokonce stahovala mračna nad budoucností celého serveru. Po
        roztříšťení A-teamu se po dlouhou dobu starala o server pouze dvojice
        majitel a Hl.Adminka. Návštěvnost serveru se ale díky jejich schopnostem
        dařilo stabilně držet. Následný nábor situaci bohužel na dlouhou dobu
        nevyřešil. Po odchodu dvou členů vypadala situace zase pochmurně. S
        příchodem koronavirové krize se však na server přivalilo kvantum nových
        hráčů. Komunita rostla, usadila se zde příjemná parta zatvrzelých hráčů,
        a A-team se rozrostl o několik schopných a přátelských lidí. S postupným
        odezněním krize světové se však hráčská komunita pochopitelně začala
        zmenšovat.. Avšak s příchodem 1.16 se znovu svítá na lepší časy.
      </p>
      
      <h3 className="font-bold mt-5">Nová etapa</h3>
      <p>
        Náš server vlastní krizi ustál, hráčů je a bylo mnoho a každým dnem k
        nám zavítalo destísky zajímavých lidí. Avšak jak to již v životě chodí,
        nic nemůže zůstat věčně. S příchodem nové verze (1.17) jsme jabko
        poposunuli zase dál. Přidali jsme zbrusu nový Anarchy server, který
        využívá novinek z 1.17 a dokonce s pomocí datapacku s lush caves dokáže
        již těď přinést zážitek podobný slibované 1.18
      </p>
    </PageLayout>
  );
};

export default AboutPage;
