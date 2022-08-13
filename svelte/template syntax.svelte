<script>
	
</script>

<style>
	
</style>

<!-- markup -->
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
tag
<div />                         lowercase   denotes html
<Widget />                      capitalised denotes component
<Namespace.Widget />            ...
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
attrs
<p class="foo" disabled></p>    exactly like html
<p disabled></button>           ...
<p type=checkbox />             ...
<p href="page/{p}">page {p}</p> value can contain expressions
<p disabled={!clickable} />     or be             expressions
<p required={false} />          boolean attr included if truthy, excluded if falsy  (not required)
<p title={null} />              attr always included unless value is null|undefined (no title)
<p disabled={disabled} />       if attr & value are same, shorthand can be used.
<p {disabled} />                same as above
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
props (attrs of components)
<C foo={bar} answer={42} text="hello" />
<C name={name} />      same shorthand rule
<C {name} />           ...
<C {...things} />      spread possible
<C {...$$props} />     access all props passed to component, even those not declared with export. (not recommended)
<C {...$$restProps} /> access only props not declared with export
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
comment
<!-- this is a comment! -->           like html
<!-- svelte-ignore a11y-autofocus --> disables warnings for the next block of markup (usually accessibility warnings)
<p bind:value={name} autofocus />
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
if
{#if expression} ... {/if}
{#if expression} ... {:else if expression} ... {/if}
{#if expression} ... {:else} ... {/if}
{#if expression} ... {:else if expression} ... {:else} ... {/if}
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
each
{#each expression as name} ... {/each}
{#each expression as name, index} ... {/each}
{#each expression as name (key)} ... {/each}
{#each expression as name, index (key)} ... {/each}
{#each expression as name} ... {:else} ... {/each}
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
{#await expression}...{:then name}...{:catch name}...{/await}
{#await expression}...{:then name}...{/await}
{#await expression then name}...{/await}
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

{@html expression}
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

element directives

on:eventname={handler}
on:eventname|modifiers={handler}

bind:property={variable}

bind:group={variable}

bind:this={dom_node}

class:name={value}
class:name

use:action
use:action={parameters}

transition:fn
transition:fn={params}
transition:fn|local
transition:fn|local={params}

in:fn
in:fn={params}
in:fn|local
in:fn|local={params}
out:fn
out:fn={params}
out:fn|local
out:fn|local={params}

animate:name
animate:name={params}
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
component directives

on:eventname={handler}

bind:property={variable}

bind:this={component_instance}
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@