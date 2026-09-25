(function () {
    'use strict';

    const i18n = {
        pt: {
            skip: 'Pular para o conteúdo',
            newtab: '(abre em nova aba)',
            search_aria: 'Buscar links e ações',
            search_title: 'Buscar',
            theme_aria: 'Alternar tema claro/escuro',
            about_aria: 'Sobre',
            toc_aria: 'Seções',
            now_in: 'Agora em São Paulo',
            r_student: 'Estudante',
            r_photo: 'Fotógrafo',
            r_ham: 'Radioamador',
            cta_photos: 'Ver fotos',
            cta_contact: 'Contato',
            ig_live: 'Ao vivo nos eventos',
            ig_title: 'Viagens e eventos, <em>em tempo real.</em>',
            ig_desc: 'Stories direto dos eventos enquanto acontecem e as fotos das viagens. A galeria completa chega depois, em fotos.lucafchala.com.',
            ig_t1: 'Stories ao vivo',
            ig_t2: 'Viagens',
            ig_t3: 'Eventos',
            ig_follow: 'Seguir no Instagram',
            bio: 'Estudante baseado em São Paulo. Fotografo eventos, viagens e o cotidiano urbano com uma <strong>Sony A6700</strong>, opero como radioamador sob o indicativo <strong>PU2XIK</strong> e divido meu tempo entre treinos de hipertrofia e a preparação para cursar engenharia da computação.',
            f_base: 'Base',
            f_camera: 'Câmera',
            f_call: 'Indicativo',
            f_next: 'Próximo passo',
            f_next_v: 'Eng. da computação',
            h_photo: 'Fotografia',
            photo_lede: 'Eventos escolares, shows, viagens e o cotidiano da cidade. No <strong>Instagram</strong> vai tudo ao vivo; as galerias completas — com entrega em alta resolução e pedido de remoção (LGPD) — ficam em <strong>fotos.lucafchala.com</strong>.',
            recent: 'Galerias recentes',
            see_all: 'Ver todas',
            featured: 'destaque',
            g_clovis: 'Show da Banda do Clóvis',
            g_junina: 'Festa Junina 2026',
            g_zenite: 'Show da Zênite',
            g_mostra: 'Mostra Cultural 2025',
            kit: 'Kit',
            k_body: 'corpo',
            k_zoom: 'zoom',
            k_wide: 'ultra-wide',
            k_flash: 'flash',
            gear_full: 'Lista completa de equipamento',
            h_radio: 'Rádio',
            radio_lede: 'Opero sob o indicativo <strong>PU2XIK</strong>, com foco em APRS, rádio digital e infraestrutura portátil — comunicação resiliente, antenas e a ponte entre rádio e tecnologia.',
            qsl_aria: 'Cartão QSL de PU2XIK',
            qsl_confirm: 'QSL · Confirmando contato',
            qsl_modes: 'Modos',
            l_profile: 'Perfil PU2XIK',
            l_qrz: 'Perfil e diário de bordo',
            l_portal: 'Portal comunitário',
            l_portal_d: 'Páginas de operadores, APRS e modos digitais',
            interests_aria: 'Interesses',
            i_ant: 'Antenas',
            i_field: 'Operação em campo',
            i_rf: 'RF experimental',
            h_contact: 'Contato',
            contact_lede: 'Para trabalhos, fotos de eventos ou só um oi: email ou WhatsApp. Para algo privado, <strong>Signal</strong> ou <strong>SimpleX</strong>.',
            send: 'Escrever',
            copy: 'Copiar',
            copied: 'Copiado',
            copy_fail: 'Não foi possível copiar',
            wa_v: 'Mensagem direta',
            wa_d: 'resposta mais rápida',
            sig_v: 'Conversa privada',
            sig_d: 'criptografia ponta a ponta',
            sx_v: 'Sem identificador',
            sx_d: 'nem número, nem usuário',
            coffee: 'Me pague um café',
            coffee_d: 'Pix via LivePix',
            social_aria: 'Redes',
            h_eco: 'Ecossistema',
            eco_lede: 'Sites pequenos, cada um com um único propósito — todos sob <strong>lucafchala.com</strong>.',
            e_fotos: 'Galerias de eventos e viagens',
            e_radio: 'Portal comunitário de radioamadorismo',
            e_paste: 'Notas, textos e documentos',
            e_url: 'Diretório de links curtos',
            e_status: 'Monitoramento dos serviços',
            e_keys: 'Chaves públicas SSH e PGP',
            e_proof: 'Declaração de identidade assinada',
            e_restricted: 'Um desafio. Três tentativas.',
            h_verify: 'Verificação',
            verify_lede: 'Tudo o que é oficial sai de um endereço <strong>@lucafchala.com</strong>. O antigo domínio tucas.me não é mais meu.',
            fp_label: 'Impressão digital PGP · RSA 4096',
            v_keys: 'Chaves públicas',
            v_keys_d: 'PGP (RSA 4096) e SSH (ed25519)',
            v_proof: 'Prova de propriedade',
            v_proof_d: 'Declaração assinada com PGP',
            v_openpgp: 'Mesma chave, servidor público',
            verify_note: 'Mensagens sobre assuntos sensíveis — código, finanças — precisam de assinatura PGP. Sem assinatura, considere não confiável.',
            madewith: 'HTML, CSS e JS puros · feito com ajuda do Claude',
            k_search: 'buscar',
            k_theme: 'tema',
            k_lang: 'idioma',
            p_placeholder: 'Buscar links e ações…',
            p_nav: 'navegar',
            p_open: 'abrir',
            p_empty: 'Nada encontrado.',
            p_actions: 'Ações',
            p_theme: 'Alternar tema claro/escuro',
            p_lang: 'Switch to English',
            p_copy_email: 'Copiar email',
            p_copy_fp: 'Copiar impressão digital PGP',
            p_top: 'Voltar ao topo',
            p_more: 'Mais',
            p_gallery: 'Galeria de fotos',
            p_instagram: 'Instagram @lucafchala',
            live_up: 'no ar',
            live_degraded: 'instável',
            live_down: 'fora do ar',
            live_title: 'Agora, segundo status.lucafchala.com'
        },
        en: {
            skip: 'Skip to content',
            newtab: '(opens in a new tab)',
            search_aria: 'Search links and actions',
            search_title: 'Search',
            theme_aria: 'Toggle light/dark theme',
            about_aria: 'About',
            toc_aria: 'Sections',
            now_in: 'Now in São Paulo',
            r_student: 'Student',
            r_photo: 'Photographer',
            r_ham: 'Radio amateur',
            cta_photos: 'See photos',
            cta_contact: 'Contact',
            ig_live: 'Live at events',
            ig_title: 'Travel and events, <em>in real time.</em>',
            ig_desc: 'Stories straight from events as they happen, plus travel photos. The full gallery follows later on fotos.lucafchala.com.',
            ig_t1: 'Live stories',
            ig_t2: 'Travel',
            ig_t3: 'Events',
            ig_follow: 'Follow on Instagram',
            bio: 'Student based in São Paulo, Brazil. I photograph events, travel and everyday city life with a <strong>Sony A6700</strong>, operate amateur radio as <strong>PU2XIK</strong>, and split my time between hypertrophy training and preparing to study computer engineering.',
            f_base: 'Based in',
            f_camera: 'Camera',
            f_call: 'Callsign',
            f_next: 'Next up',
            f_next_v: 'Computer eng.',
            h_photo: 'Photography',
            photo_lede: 'School events, gigs, travel and everyday city life. <strong>Instagram</strong> gets it all live; full galleries — with full-resolution delivery and LGPD removal requests — live at <strong>fotos.lucafchala.com</strong>.',
            recent: 'Recent galleries',
            see_all: 'See all',
            featured: 'featured',
            g_clovis: 'Banda do Clóvis live',
            g_junina: 'Festa Junina 2026',
            g_zenite: 'Zênite live',
            g_mostra: 'Mostra Cultural 2025',
            kit: 'Kit',
            k_body: 'body',
            k_zoom: 'zoom',
            k_wide: 'ultra-wide',
            k_flash: 'flash',
            gear_full: 'Full gear list',
            h_radio: 'Radio',
            radio_lede: 'I operate as <strong>PU2XIK</strong>, focused on APRS, digital radio and portable infrastructure — resilient communication, antennas and bridging radio with technology.',
            qsl_aria: 'PU2XIK QSL card',
            qsl_confirm: 'QSL · Confirming our QSO',
            qsl_modes: 'Modes',
            l_profile: 'PU2XIK profile',
            l_qrz: 'Profile and logbook',
            l_portal: 'Community portal',
            l_portal_d: 'Operator pages, APRS and digital modes',
            interests_aria: 'Interests',
            i_ant: 'Antennas',
            i_field: 'Field operations',
            i_rf: 'Experimental RF',
            h_contact: 'Contact',
            contact_lede: 'For work, event photos or just to say hi: email or WhatsApp. For something private, <strong>Signal</strong> or <strong>SimpleX</strong>.',
            send: 'Compose',
            copy: 'Copy',
            copied: 'Copied',
            copy_fail: 'Couldn’t copy',
            wa_v: 'Direct message',
            wa_d: 'fastest reply',
            sig_v: 'Private chat',
            sig_d: 'end-to-end encrypted',
            sx_v: 'No identifier',
            sx_d: 'no phone number, no username',
            coffee: 'Buy me a coffee',
            coffee_d: 'Pix via LivePix',
            social_aria: 'Social',
            h_eco: 'Ecosystem',
            eco_lede: 'Small, single-purpose sites — all under <strong>lucafchala.com</strong>.',
            e_fotos: 'Event and travel galleries',
            e_radio: 'Community amateur-radio portal',
            e_paste: 'Notes, texts and documents',
            e_url: 'Short-link directory',
            e_status: 'Service monitoring',
            e_keys: 'Public SSH and PGP keys',
            e_proof: 'Signed identity statement',
            e_restricted: 'A challenge. Three attempts.',
            h_verify: 'Verification',
            verify_lede: 'Anything official comes from an <strong>@lucafchala.com</strong> address. The old tucas.me domain is no longer mine.',
            fp_label: 'PGP fingerprint · RSA 4096',
            v_keys: 'Public keys',
            v_keys_d: 'PGP (RSA 4096) and SSH (ed25519)',
            v_proof: 'Proof of ownership',
            v_proof_d: 'PGP-signed statement',
            v_openpgp: 'Same key, public keyserver',
            verify_note: 'Messages about sensitive matters — code, money — must be PGP-signed. Unsigned means untrusted.',
            madewith: 'plain HTML, CSS and JS · made with help from Claude',
            k_search: 'search',
            k_theme: 'theme',
            k_lang: 'language',
            p_placeholder: 'Search links and actions…',
            p_nav: 'navigate',
            p_open: 'open',
            p_empty: 'Nothing found.',
            p_actions: 'Actions',
            p_theme: 'Toggle light/dark theme',
            p_lang: 'Mudar para português',
            p_copy_email: 'Copy email',
            p_copy_fp: 'Copy PGP fingerprint',
            p_top: 'Back to top',
            p_more: 'More',
            p_gallery: 'Photo gallery',
            p_instagram: 'Instagram @lucafchala',
            live_up: 'up',
            live_degraded: 'degraded',
            live_down: 'down',
            live_title: 'Right now, per status.lucafchala.com'
        }
    };

    const root = document.documentElement;
    const $ = (sel) => document.querySelector(sel);
    // Theme/lang are shared with every *.lucafchala.com site through lf_* cookies
    // on the parent domain; localStorage stays as the per-origin fallback.
    const store = {
        get(k) {
            const m = document.cookie.match(new RegExp('(?:^|; )lf_' + k + '=([^;]*)'));
            if (m) return decodeURIComponent(m[1]);
            try { return localStorage.getItem(k); } catch (e) { return null; }
        },
        set(k, v) {
            try { localStorage.setItem(k, v); } catch (e) {}
            const dom = /(^|\.)lucafchala\.com$/.test(location.hostname) ? '; Domain=.lucafchala.com' : '';
            document.cookie = 'lf_' + k + '=' + encodeURIComponent(v) + dom + '; Path=/; Max-Age=31536000; SameSite=Lax' + (location.protocol === 'https:' ? '; Secure' : '');
        }
    };
    const t = (key) => i18n[root.dataset.lang || 'pt'][key] || key;

    // ── Language ──
    function formatDates(lang) {
        const fmt = new Intl.DateTimeFormat(lang === 'pt' ? 'pt-BR' : 'en-US', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
        document.querySelectorAll('.recent time[datetime]').forEach(el => {
            el.textContent = fmt.format(new Date(el.getAttribute('datetime') + 'T12:00:00Z')).replace(/\./g, '').replace(/ de /g, ' ');
        });
    }

    function setLang(lang, persist) {
        if (!i18n[lang]) lang = 'pt';
        root.lang = lang === 'pt' ? 'pt-BR' : 'en';
        root.dataset.lang = lang;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const v = i18n[lang][el.dataset.i18n];
            if (v !== undefined) el.innerHTML = v;
        });
        document.querySelectorAll('[data-i18n-aria]').forEach(el => {
            const v = i18n[lang][el.dataset.i18nAria];
            if (v !== undefined) el.setAttribute('aria-label', v);
        });
        $('#pal-input').placeholder = i18n[lang].p_placeholder;
        $('#btn-pt').setAttribute('aria-pressed', String(lang === 'pt'));
        $('#btn-en').setAttribute('aria-pressed', String(lang === 'en'));
        formatDates(lang);
        renderClock();
        renderLive();
        if (persist) store.set('lang', lang);
    }

    // ── Theme ──
    function applyTheme(theme, persist) {
        root.dataset.theme = theme;
        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.content = theme === 'light' ? '#f4efe6' : '#0d0c0a';
        if (persist) store.set('theme', theme);
    }
    function toggleTheme() {
        applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark', true);
    }
    if (window.matchMedia) {
        const mq = matchMedia('(prefers-color-scheme: light)');
        const follow = (e) => { if (!store.get('theme')) applyTheme(e.matches ? 'light' : 'dark', false); };
        if (mq.addEventListener) mq.addEventListener('change', follow);
    }

    // ── Clock (São Paulo, UTC−3) ──
    function renderClock() {
        const el = $('#clock');
        if (!el) return;
        try {
            const now = new Date();
            el.textContent = new Intl.DateTimeFormat(root.dataset.lang === 'en' ? 'en-GB' : 'pt-BR', {
                hour: '2-digit', minute: '2-digit', timeZone: 'America/Sao_Paulo'
            }).format(now) + ' (UTC−3)';
            el.setAttribute('datetime', now.toISOString());
        } catch (e) { /* keep static fallback */ }
    }

    // ── Toast + clipboard ──
    let toastTimer;
    function toast(msg) {
        const el = $('#toast');
        el.textContent = msg;
        el.classList.add('show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => el.classList.remove('show'), 1800);
    }
    async function copy(text) {
        try {
            await navigator.clipboard.writeText(text);
            toast(t('copied') + ' ✓');
        } catch (e) {
            toast(t('copy_fail'));
        }
    }

    // ── Email (assembled here to dodge naive scrapers) ──
    const user = 'website';
    const domain = 'lucafchala.com';
    const email = `${user}@${domain}`;
    $('#email-link').href = `mailto:${email}`;
    $('#email-send').href = `mailto:${email}`;
    $('#email-text').textContent = email;
    $('#email-copy').addEventListener('click', () => copy(email));

    const fingerprint = '48E73F6FA2871E7B86EFEA648EC4329A369B7B33';
    $('#fp-copy').addEventListener('click', () => copy(fingerprint));

    // ── Live status dots on the 04 Ecossistema cards ──
    // Reads status's /api/resumo: ~1 KB, CORS-open, cached 60 s, and it only
    // reads the D1 snapshot (never sweeps). It used to read /api/painel, which
    // has no CORS header and weighs ~90 KB, so the browser dropped it and no dot
    // ever showed (status#52). Dots only appear with the shared snapshot
    // (retratoCompartilhado):
    // without it the panel has no status, and /api/status would sweep every
    // subdomain per visitor. Any failure leaves the cards as they are.
    let live = null;
    function renderLive() {
        if (!live) return;
        document.querySelectorAll('.eco a[href]').forEach(a => {
            let host;
            try { host = new URL(a.href).host; } catch (e) { return; }
            const st = live[host];
            let dot = a.querySelector('.live');
            if (!st) { if (dot) dot.remove(); return; }
            if (!dot) {
                dot = document.createElement('span');
                dot.className = 'live';
                dot.innerHTML = '<span class="live-dot" aria-hidden="true"></span><span class="sr-only"></span>';
                a.appendChild(dot);
            }
            dot.dataset.status = st;
            dot.title = t('live_title') + ': ' + t('live_' + st);
            dot.querySelector('.sr-only').textContent = ' — ' + t('live_' + st);
        });
    }
    function loadLive() {
        if (!window.fetch) return;
        fetch('https://status.lucafchala.com/api/resumo', { credentials: 'omit' })
            .then(r => (r.ok ? r.json() : null))
            .then(p => {
                const svcs = p && p.retratoCompartilhado === true && Array.isArray(p.services) ? p.services : null;
                if (!svcs) return;
                const map = {};
                svcs.forEach(s => {
                    if (!s || typeof s.url !== 'string' || !['up', 'degraded', 'down'].includes(s.status)) return;
                    try { const h = new URL(s.url).host; if (!map[h] || s.url.replace(/\/$/, '') === 'https://' + h) map[h] = s.status; } catch (e) {}
                });
                live = map;
                renderLive();
            })
            .catch(() => {});
    }

    // ── Init preferences ──
    const savedLang = store.get('lang');
    const initialLang = savedLang || ((navigator.language || 'pt').toLowerCase().startsWith('pt') ? 'pt' : 'en');
    setLang(initialLang, false);
    setInterval(renderClock, 20000);
    // After first paint: the dots are decoration, never worth delaying the page.
    if (document.readyState === 'complete') loadLive(); else window.addEventListener('load', loadLive, { once: true });

    // Controls (listeners instead of inline onclick so the CSP can drop 'unsafe-inline')
    $('#btn-pt').addEventListener('click', () => setLang('pt', true));
    $('#btn-en').addEventListener('click', () => setLang('en', true));
    $('#btn-theme').addEventListener('click', toggleTheme);

    // ── Top bar border on scroll ──
    const topbar = $('#topbar');
    const onScroll = () => topbar.classList.toggle('scrolled', window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // ── Reveal on scroll ──
    (function () {
        const els = document.querySelectorAll('.reveal');
        if (!('IntersectionObserver' in window)) { els.forEach(el => el.classList.add('in')); return; }
        const io = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
            });
        }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
        els.forEach(el => io.observe(el));
    })();

    // ── Command palette ──
    const palette = (function () {
        const dlg = $('#palette');
        const input = $('#pal-input');
        const list = $('#pal-list');
        if (!dlg || typeof dlg.showModal !== 'function') return null;
        let items = [];
        let shown = [];
        let active = 0;

        const clean = (s) => s.replace(/[↗→↓]/g, '').replace(/\s+/g, ' ').trim();
        const norm = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

        function collect() {
            const seen = new Set();
            const out = [];
            document.querySelectorAll('main section[id] a[href], .site-foot a[href]').forEach(a => {
                const href = a.href;
                if (seen.has(href) || a.getAttribute('href').startsWith('#')) return;
                seen.add(href);
                const sec = a.closest('section[id]');
                const h2 = sec && sec.querySelector('h2');
                const titleEl = a.querySelector('.t, .sub b, time + span, .c-label span') || a;
                let label = clean(titleEl.textContent);
                if (a.matches('.recent a')) label = clean(a.querySelector('time + span').textContent);
                if (a.matches('.eco a')) label = clean(a.querySelector('.sub').textContent);
                if (a.dataset.palI18n) label = t(a.dataset.palI18n);
                out.push({
                    label,
                    hint: href.replace(/^https?:\/\//, '').replace(/^mailto:/, '').replace(/\/$/, ''),
                    group: h2 ? clean(h2.textContent) : t('p_more'),
                    run: () => { a.target === '_blank' ? window.open(href, '_blank', 'noopener') : (location.href = href); }
                });
            });
            const actions = [
                { label: t('p_theme'), hint: 'T', run: toggleTheme },
                { label: t('p_lang'), hint: 'L', run: () => setLang(root.dataset.lang === 'pt' ? 'en' : 'pt', true) },
                { label: t('p_copy_email'), hint: email, run: () => copy(email) },
                { label: t('p_copy_fp'), hint: '48E7 … 7B33', run: () => copy(fingerprint) },
                { label: t('p_top'), hint: '↑', run: () => window.scrollTo({ top: 0 }) }
            ].map(a => Object.assign(a, { group: t('p_actions') }));
            return actions.concat(out);
        }

        function render() {
            const q = norm(input.value.trim());
            shown = !q ? items : items.filter(it => norm(it.label + ' ' + it.hint + ' ' + it.group).includes(q));
            if (active >= shown.length) active = Math.max(0, shown.length - 1);
            list.textContent = '';
            if (!shown.length) {
                const li = document.createElement('li');
                li.className = 'pal-empty';
                li.textContent = t('p_empty');
                list.appendChild(li);
                input.removeAttribute('aria-activedescendant');
                return;
            }
            let group = null;
            shown.forEach((it, i) => {
                if (it.group !== group) {
                    group = it.group;
                    const g = document.createElement('li');
                    g.className = 'pal-group';
                    g.setAttribute('role', 'presentation');
                    g.textContent = group;
                    list.appendChild(g);
                }
                const li = document.createElement('li');
                li.className = 'pal-item';
                li.id = 'pal-' + i;
                li.setAttribute('role', 'option');
                li.setAttribute('aria-selected', String(i === active));
                const label = document.createElement('span');
                label.textContent = it.label;
                const hint = document.createElement('small');
                hint.textContent = it.hint;
                li.append(label, hint);
                li.addEventListener('click', () => choose(i));
                li.addEventListener('mousemove', () => { if (active !== i) { active = i; mark(); } });
                list.appendChild(li);
            });
            mark();
        }

        function mark() {
            list.querySelectorAll('.pal-item').forEach(li => {
                const on = li.id === 'pal-' + active;
                li.setAttribute('aria-selected', String(on));
                if (on) li.scrollIntoView({ block: 'nearest' });
            });
            input.setAttribute('aria-activedescendant', 'pal-' + active);
        }

        function choose(i) {
            const it = shown[i];
            if (!it) return;
            dlg.close();
            it.run();
        }

        function open() {
            if (dlg.open) return;
            items = collect();
            input.value = '';
            active = 0;
            render();
            dlg.showModal();
            input.focus();
        }

        input.addEventListener('input', () => { active = 0; render(); });
        input.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowDown') { e.preventDefault(); active = Math.min(active + 1, shown.length - 1); mark(); }
            else if (e.key === 'ArrowUp') { e.preventDefault(); active = Math.max(active - 1, 0); mark(); }
            else if (e.key === 'Enter') { e.preventDefault(); choose(active); }
            else if (e.key === 'Escape') { e.preventDefault(); dlg.close(); }
        });
        dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });
        return { open, dlg };
    })();

    if (palette) {
        $('#btn-search').addEventListener('click', palette.open);
    }

    // ── Keyboard shortcuts ──
    document.addEventListener('keydown', (e) => {
        const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName) || e.target.isContentEditable;
        if (palette && (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
            e.preventDefault();
            palette.dlg.open ? palette.dlg.close() : palette.open();
            return;
        }
        if (typing || e.metaKey || e.ctrlKey || e.altKey) return;
        if (palette && e.key === '/') { e.preventDefault(); palette.open(); }
        else if (e.key === 't' || e.key === 'T') toggleTheme();
        else if (e.key === 'l' || e.key === 'L') setLang(root.dataset.lang === 'pt' ? 'en' : 'pt', true);
    });

    // ── Hidden: DevTools console signature ──
    console.log(
        '%c  )) ))) )))  %cPU2XIK%c\n\n' +
        'CQ CQ DE PU2XIK\n' +
        'Student · Photographer · Amateur radio operator\n' +
        'São Paulo, BR — github.com/lucafchala\n' +
        'Psst: try / or ⌘K.',
        'color:#c08030;font-family:monospace;font-size:11px;',
        'background:#c08030;color:#0d0c0a;font-weight:bold;padding:2px 7px;border-radius:2px;font-family:monospace;font-size:12px;',
        'color:#c08030;font-family:monospace;font-size:12px;line-height:1.6;'
    );

    // ── Hidden: hold the callsign → radio sweep ──
    (function () {
        const el = document.querySelector('.callsign');
        if (!el) return;
        let holdTimer = null;
        let sweeping = false;

        function startHold() {
            if (sweeping) return;
            holdTimer = setTimeout(() => {
                sweeping = true;
                document.body.classList.add('radio-sweep');
                setTimeout(() => {
                    document.body.classList.remove('radio-sweep');
                    sweeping = false;
                }, 2200);
            }, 600);
        }

        function cancelHold() {
            clearTimeout(holdTimer);
        }

        el.addEventListener('pointerdown', startHold);
        el.addEventListener('pointerup', cancelHold);
        el.addEventListener('pointercancel', cancelHold);
        el.addEventListener('pointerleave', cancelHold);
    })();

    // ── Hidden: five quick taps on the name → Morse flash ──
    (function () {
        const el = document.querySelector('.name');
        if (!el) return;
        const overlay = document.getElementById('morse-overlay');
        const led = document.getElementById('morse-led');
        if (!overlay || !led) return;

        const MORSE = {
            C: '-.-.', Q: '--.-', D: '-..', E: '.',
            P: '.--.', U: '..-', '2': '..---', X: '-..-', I: '..', K: '-.-'
        };
        const UNIT = 60;
        let taps = [];
        let playing = false;

        function morseSequence(str) {
            const seq = [];
            str.split(' ').forEach((word, wi, words) => {
                [...word].forEach((ch, ci) => {
                    const code = MORSE[ch];
                    if (!code) return;
                    [...code].forEach((sym, si) => {
                        seq.push({ on: true, duration: sym === '-' ? UNIT * 3 : UNIT });
                        if (si < code.length - 1) seq.push({ on: false, duration: UNIT });
                    });
                    if (ci < word.length - 1) seq.push({ on: false, duration: UNIT * 3 });
                });
                if (wi < words.length - 1) seq.push({ on: false, duration: UNIT * 7 });
            });
            return seq;
        }

        function playMorse() {
            const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            overlay.classList.add('visible');

            if (reduceMotion) {
                led.classList.add('on');
                setTimeout(() => {
                    led.classList.remove('on');
                    overlay.classList.remove('visible');
                    playing = false;
                }, 900);
                return;
            }

            const seq = morseSequence('CQ DE PU2XIK');
            let elapsed = 0;
            seq.forEach(step => {
                setTimeout(() => led.classList.toggle('on', step.on), elapsed);
                elapsed += step.duration;
            });
            setTimeout(() => {
                led.classList.remove('on');
                overlay.classList.remove('visible');
                playing = false;
            }, elapsed + 400);
        }

        el.addEventListener('click', () => {
            if (playing) return;
            const now = Date.now();
            taps = taps.filter(t => now - t < 1500);
            taps.push(now);
            if (taps.length >= 5) {
                taps = [];
                playing = true;
                playMorse();
            }
        });
    })();

    // ── WebMCP — expose page actions to AI agents, feature-detected ──
    // https://webmachinelearning.github.io/webmcp/
    if (navigator.modelContext && typeof navigator.modelContext.provideContext === 'function') {
        navigator.modelContext.provideContext({
            tools: [
                {
                    name: 'set_theme',
                    description: 'Switch the site color theme to dark or light.',
                    inputSchema: {
                        type: 'object',
                        properties: {
                            theme: { type: 'string', enum: ['dark', 'light'], description: 'Theme to apply.' }
                        },
                        required: ['theme']
                    },
                    async execute({ theme }) {
                        const next = theme === 'light' ? 'light' : 'dark';
                        applyTheme(next, true);
                        return { content: [{ type: 'text', text: `Theme set to ${next}.` }] };
                    }
                },
                {
                    name: 'set_language',
                    description: 'Switch the page language between Portuguese (pt) and English (en).',
                    inputSchema: {
                        type: 'object',
                        properties: {
                            language: { type: 'string', enum: ['pt', 'en'], description: 'Language code.' }
                        },
                        required: ['language']
                    },
                    async execute({ language }) {
                        const lang = language === 'en' ? 'en' : 'pt';
                        setLang(lang, true);
                        return { content: [{ type: 'text', text: `Language set to ${lang}.` }] };
                    }
                },
                {
                    name: 'get_profile',
                    description: 'Get structured profile information about Luca F. Chala: roles, amateur-radio callsign, location, gear, and key links.',
                    inputSchema: { type: 'object', properties: {} },
                    async execute() {
                        const profile = {
                            name: 'Luca F. Chala',
                            callsign: 'PU2XIK',
                            location: 'São Paulo, Brazil',
                            roles: ['Student', 'Photographer', 'Amateur radio operator'],
                            bio: i18n.en.bio.replace(/<[^>]+>/g, ''),
                            camera: 'Sony A6700',
                            radioInterests: ['APRS', 'DMR', 'Packet radio', 'Antennas', 'Field operations'],
                            pgpFingerprint: fingerprint,
                            links: {
                                photos: 'https://fotos.lucafchala.com',
                                gear: 'https://paste.lucafchala.com/camera-gear/',
                                instagram: 'https://lucafchala.com/instagram', // travel photos + live event stories
                                radioPortal: 'https://radio.lucafchala.com',
                                radioProfile: 'https://radio.lucafchala.com/pu2xik/',
                                qrz: 'https://www.qrz.com/db/PU2XIK',
                                github: 'https://lucafchala.com/github',
                                keys: 'https://keys.lucafchala.com',
                                proof: 'https://proof.lucafchala.com',
                                status: 'https://status.lucafchala.com',
                                email
                            }
                        };
                        return { content: [{ type: 'text', text: JSON.stringify(profile, null, 2) }] };
                    }
                }
            ]
        });
    }
})();

