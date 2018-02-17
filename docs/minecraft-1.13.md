---
id: minecraft-1.13
title: Minecraft 1.13
sidebar_label: Minecraft 1.13
---

Informace o připravovaném updatu Minecraft 1.13.

* Tento update se zaměřuje na celkovou optimalizaci Minecraftu pro všechny platformy - Windows/Mac ale také i servery.
* Také obsahuje tzv. Aquatic Update -> velký update podmořského světa.

> Tato verze není oficálně vypadá. Mojang průběžně uveřějňuje a testuje snapshoty.
Plánované datum vydání je Q2/2018.

## Co přináš 1.13 nového?
### DataPacks
* Jedná se o `.zip` soubor, který může obsahovat samotný resource pack, loot tables soubory, advancementy, funkce, struktury a (v pozdější fázi) i vlastní recepty.
* Lze používat jak pro singleplayer tak i pro multiplayer (bukkit) servery, samozřejmě lze mít aktivovaných víc data packů najednou a tím zcela změnit Minecraft (funkčně pro mapu/server) bez použití modů.
* Datapacky se dají znovu načítat pomocí příkazu `/reload` bez restartu serveru.

### Příkazy
* Nově jsou všechny Vanilla příkazy barevné podle typů požadavku..
* Chyby se nyní přímo ukazují v chatu a nespouští příkazy.

### Death zprávy
* Přidána nová zpráva, pokuď hráč zemře při výbuchu postele v Endu nebo Netheru.
    * `Player was killed by [Intentional Game Design]` -> Kliknutím na text v závorkách nás odkáže na následující odkaz: <a href="https://bugs.mojang.com/browse/MCPE-28723">MCPE-28723</a>.
* Přidána nová zpráva, pokuď hráč zemře v případě, že ho jiný hráč/mob shodil do voidu.
    * `Player didn't want to live in the same world as Player/Mob`.

### Nové nastavení
* FS (Fullscreen) Resolution
    * Nová položka v nastavení, které mění rozlišení Minecraftu. Dříve byl Minecraft pouze zvětšovaný (scalovaný), nyní lze dosáhnout i 4k obrazu bez jakéhokoliv zkreslení.
* Přidána možnost vypnout napovídání příkazů (defaultně zapnuto)
* Přidána možnost aktivovat zálohy světa

### Biomy
* Do Endu byly přidána čtyři nové biomy - The End - Floating Islands, The End - Medium island, The End - High island, The End - Barren island.

### Bloky
* Byly přidány nové druhy Trapdoorů, tlačítek a pressure plates podle typů dřeva.
* Nový blok Pumpkin blok bez obličeje.
    * Kliknutím s nůžky na tento blok, vytvoří do dýně obličej, tak jak ho známe.
* Přidán `cave_air` a `void_air`
    * Jedná se o bloky vzduchu, které se nedají získat.
    * `cave_air` se generuje v jeskyních.
    * `void_air` se generuje nad výškou 255+ a pod 0, tedy ve voidu, a také v nenačtených chunkách.
