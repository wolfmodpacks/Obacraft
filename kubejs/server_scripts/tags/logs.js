ServerEvents.tags('item', event => {


        // Arclight
        const arclight_logs = [
            'moon_log',
            'stripped_moon_log',
            'jade_log',
            'stripped_jade_log',
            'shadow_log',
            'stripped_shadow_log',
        ]

        // Ad Astra
        const ad_astra_logs = [
            'glacian_log',
            'stripped_glacian_log',
        ]

        arclight_logs.forEach((log) => {
            event.add(`minecraft:logs`, `arclight:${log}`)
        })

        ad_astra_logs.forEach((log) => {
            event.add(`minecraft:logs`, `ad_astra:${log}`)
        })

})