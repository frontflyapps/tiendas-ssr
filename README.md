Tiendas-SSR
--------------------------------------

## DEVELOPMENT

### Step 1

- Make sure to use node `v16.19.0` and pnpm `8.7.5`.

### Step 2

- Then run `pnpm install`

### Step 3

- Change your hosts file to add this line: `127.0.0.1 tienda.guajiritos.com`

### Step 4

- Once dependencies all are installed, run `APP_NAME=<appName> pnpm start` to wake up the dev-server with the app, and go to `http://tienda.guajiritos.com:4308` to open the view.

## DEPLOY

### Step 1

- Install `pnpm` as global package if the deploy platform does not have it by default.

### Step 2

- Then run `pnpm install`

### Step 3

- Set the env variable `APP_NAME` in the store's deploy with one of the `<appName>` values.

### Step 4

- Once dependencies all are installed, run `pnpm build && pnpm serve` to build and serve the app.

### APP_NAMEs

- `<appName>` should be one of `VeoVeo`,
    `Umbralf`,
    `Supermax`,
    `Acubamos`,
    `GranComercial`,
    `Marlin`,
    `MiBulevar-Etecsa`,
    `Pruebalo`,
    `Apululu`,
    `GranComerial-Mayoristas`,
    `MercadoMas`,
    `MiBulevar-Genesis`,
    `PymesBulevar`,
    `Atec`,
    `GranFerretero`,
    `MercadosPresidente`,
    `MiBulevar-Gesin`,
    `RapidMultiservice`,
    `Bianca`,
    `HavTel`,
    `MiBulevar`,
    `MiBulevar-Mercatuaba`,
    `Caracol`,
    `HomeDeli`,
    `MiBulevar-Alcansan`,
    `MiBulevar-Ofa`,
    `DCero`,
    `ITH`,
    `MiBulevar-Aligan`,
    `MiBulevar-TiendasPatrimonio`,
    `Donato`,
    `LaCeiba`,
    `MiBulevar-ComercioCienfueg`,
    `MiBulevar-Trd`,
    `DondeDorian`,
    `LaLuciana`,
    `MiBulevar-Constelaciones`,
    `MisterDamian`,
    `Dujo`,
    `LaPolimita`,
    `MiBulevar-Cupetcfg`,
    `MundoCopextel`,
    `ElAjibe`,
    `LaTorre`,
    `MiBulevar-Cupetgrm`,
    `OpticasTheia`,
    `ElGuajirito`,
    `LasPraderas`,
    `MiBulevar-Cupethol`,
    `Palmares`,
    `Ferretero`,
    `MCV`,
    `MiBulevar-Cupetltu`,
    `Parranda`,
    `Gelato`,
    `MM_Caribe`,
    `MiBulevar-Epueblo`,
    `PeopleGoTo`