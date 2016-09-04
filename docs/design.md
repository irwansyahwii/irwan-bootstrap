## Layout

<container>
</container>

<container fluid="true">
</container>

<row flexItems="xs-left">
</row>

<col xs="true" sm="6" lg="true" sm="4" xs="1" sm="8" hidden="xs-down, " offset="md-4">
</col>

<media>
    <media-left>
    </media-left>
    <media-right>
    </media-right>
    <media-body>
        <media-heading>
        </media-heading>
    </media-body>
</media>

Directives:

[hidden-*-up]


## Components

### Alert

<alert-success dismissible="true" close-button="no">

</alert>

<alert-info>
</alert>

<alert-warning>
</alert>

<alert-danger>
</alert>

### Breadcrumb

<breadcrumb>
    <breadcrumb-item active="true"></breadcrumb-item>
</breadcrumb>

### Buttons

<button-primary></button-primary>

<button-secondary></button-secondary>

<button-success></button-success>

<button-info></button-info>

<button-warning></button-warning>

<button-danger></button-danger>

<button-link></button-link>

Directives:

- [type="submit | anchor | input | reset | label"]
- [outline="true"]
- [size="large | small | block"]
- [active="true"]
- [disabled]

### Checkbox and Radio Buttons

<checkbox-group>
    <checkbox></checkbox>
</checkbox-group>

<radio-group>
    <radio></radio>
</radio-group>

Directives:

- [type="label"]


### Button Group

<button-group>
</button-group>

<button-toolbar>
</button-toolbar>

Directives:

- [size="large | small | middle"]
- [direction="vertical | horizontal"]


* Nesting:


### Cards

<card>
    <card-header></card-header>
    <card-block>
        <card-title></card-title>
        <card-text></card-text>
    </card-block>    
    <card-footer></card-footer>
</card>


Directives:

- [inverse="true"]
- [background="primary | success | info | warning | danger"]
- [outline = "true"]


<card-group>
</card-group>

<card-deck></card-deck>

<card-columns></card-columns>


### Carousel

<carousel></carousel>


### Collapse

<collapse></collapse>

### Accordion

<accordion>
    <accordion-item>
        <accordion-item-title></accordion-item-title>
        <collapse></collapse>
    </accordion-item>
</accordion>


### Dropdowns

<dropdown>
    <dropdown-header></dropdown-header>
    <button-primary></button-primary>

    <dropdown-menu>
        <dropdown-menu-item disabled></dropdown-menu-item>
        <divider></divider>
    </dropdown-menu>
</dropdown>

Directives:

- [open="true | false"]
- [size="large | small"]
- [dropup = "true | false"]


### Forms

<form inline="true">
    <form-group row="true">
        <file></file>
        <input-email></input-email>
        <input-password></input-password>
        <input-text>
            <input-text-addon></input-text-addon>
            <input-text-addon></input-text-addon>
        </input-text>
    </form-group>
</form>