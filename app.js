(function () {
    'use strict';

    const i18n = {
        pt: {
            doc_title: 'Luca F. Chala · Estudante, projetos, fotografia e rádio',
            brand_aria: 'Luca F. Chala: início',
            skip: 'Pular para o conteúdo',
            newtab: '(abre em nova aba)',
            search_aria: 'Buscar links e ações',
            search_title: 'Buscar',
            theme_aria: 'Alternar tema claro/escuro',
            r_student: 'Estudante',
            r_photo: 'Fotógrafo',
            hero_lede: 'Vestibulando 2027 em Engenharia de Computação. Construo a minha própria infraestrutura, fotografo eventos e opero rádio.',
            h_projects: 'Projetos',
            pj1_t: 'Galeria de fotos com privacidade',
            pj1_d: 'Fotos de eventos entregues por uma galeria com acesso protegido e pedido de remoção conforme a LGPD, em vez de uma pasta aberta.',
            pj1_f: '<strong>~68</strong> participantes · FNUSC 2026',
            pj1_l1: 'Ver o caso',
            pj2_t: 'Homelab e monitoramento',
            pj2_d: 'Um servidor Linux com Docker e os sites lucafchala.com na Cloudflare, monitorados para eu saber quando algo cai.',
            pj2_f: '<strong>10</strong> serviços · desde 2026',
            pj2_l1: 'Status',
            pj3_t: 'Curadoria para o T-Embed',
            pj3_d: 'Fontes públicas para a placa com o firmware Bruce, reorganizadas e documentadas em português e inglês. É curadoria, não código original.',
            pj3_f: '<strong>~55.800</strong> arquivos · sem duplicatas',
            ai_note: 'Sobre IA: o código dos meus projetos atuais é escrito com apoio do Claude. Os requisitos, a arquitetura, a revisão, as decisões e a operação são meus.',
            h_photo: 'Fotografia',
            gear: 'Equipamento',
            h_radio: 'Rádio',
            l_profile: 'Perfil PU2XIK',
            l_portal: 'Portal',
            bio: 'Estudante em São Paulo, vestibulando 2027 em Engenharia de Computação. Construo e mantenho a minha própria infraestrutura, fotografo eventos com uma <strong>Sony A6700</strong> e opero rádio sob o indicativo <strong>PU2XIK</strong>.',
            h_contact: 'Contato',
            copy: 'copiar',
            copied: 'Copiado',
            copy_fail: 'Não foi possível copiar',
            coffee: 'Me pague um café',
            verify_note: 'Mensagens sobre assuntos sensíveis precisam de assinatura PGP. Tudo o que é oficial sai de um endereço @lucafchala.com.',
            h_eco: 'Ecossistema',
            madewith: 'HTML, CSS e JS puros · feito com ajuda do Claude',
            shortcuts_hint: 'Atalhos: / busca, T tema, L idioma',
            search_hint: 'Buscar (/ ou Ctrl+K)',
            p_placeholder: 'Buscar links e ações…',
            p_results: 'Resultados',
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
            r_city: 'São Paulo, BR',
            bio_2: 'Em 2025, dei aulas de inglês toda semana para crianças em hemodiálise no Instituto da Criança do Hospital das Clínicas, em um estágio da escola.',
            h_links: 'Links',
            l_fotos: 'Galerias',
            h_more: 'Mais',
            l_links: 'Links curtos',
            recent: 'Galerias recentes',
            e_fotos: 'galerias',
            e_radio: 'portal de rádio',
            e_paste: 'notas e textos',
            e_url: 'links curtos',
            e_status: 'monitoramento',
            e_keys: 'chaves SSH e PGP',
            e_proof: 'identidade assinada',
            e_restricted: 'um enigma',
            f_proof: 'Prova de propriedade',
            f_keys: 'Chaves PGP e SSH'
        },
        en: {
            doc_title: 'Luca F. Chala · Student, projects, photography and radio',
            brand_aria: 'Luca F. Chala: home',
            skip: 'Skip to content',
            newtab: '(opens in a new tab)',
            search_aria: 'Search links and actions',
            search_title: 'Search',
            theme_aria: 'Toggle light/dark theme',
            r_student: 'Student',
            r_photo: 'Photographer',
            hero_lede: 'Applying for Computer Engineering in 2027. I build my own infrastructure, photograph events and operate amateur radio.',
            h_projects: 'Projects',
            pj1_t: 'Photo gallery with privacy',
            pj1_d: 'Event photos delivered through a gallery with protected access and removal requests under Brazil’s data protection law (LGPD), not an open folder.',
            pj1_f: '<strong>~68</strong> participants · FNUSC 2026',
            pj1_l1: 'See the case',
            pj2_t: 'Homelab and monitoring',
            pj2_d: 'A Linux server with Docker and the lucafchala.com sites on Cloudflare, monitored so I know when something goes down.',
            pj2_f: '<strong>10</strong> services · since 2026',
            pj2_l1: 'Status',
            pj3_t: 'T-Embed curation',
            pj3_d: 'Public sources for the board with the Bruce firmware, reorganized and documented in Portuguese and English. It is curation, not original code.',
            pj3_f: '<strong>~55,800</strong> files · no duplicates',
            ai_note: 'About AI: the code of my current projects is written with help from Claude. The requirements, architecture, review, decisions and operation are mine.',
            h_photo: 'Photography',
            gear: 'Gear',
            h_radio: 'Radio',
            l_profile: 'PU2XIK profile',
            l_portal: 'Portal',
            bio: 'Student in São Paulo, applying for Computer Engineering in 2027. I build and run my own infrastructure, photograph events with a <strong>Sony A6700</strong> and operate amateur radio under the callsign <strong>PU2XIK</strong>.',
            h_contact: 'Contact',
            copy: 'copy',
            copied: 'Copied',
            copy_fail: 'Couldn’t copy',
            coffee: 'Buy me a coffee',
            verify_note: 'Messages about sensitive matters must be PGP-signed. Anything official comes from an @lucafchala.com address.',
            h_eco: 'Ecosystem',
            madewith: 'plain HTML, CSS and JS · made with help from Claude',
            shortcuts_hint: 'Shortcuts: / search, T theme, L language',
            search_hint: 'Search (/ or Ctrl+K)',
            p_placeholder: 'Search links and actions…',
            p_results: 'Results',
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
            r_city: 'São Paulo, BR',
            bio_2: 'In 2025, I taught English every week to children in hemodialysis at the Instituto da Criança of Hospital das Clínicas, in a school internship.',
            h_links: 'Links',
            l_fotos: 'Galleries',
            h_more: 'More',
            l_links: 'Short links',
            recent: 'Recent galleries',
            e_fotos: 'galleries',
            e_radio: 'radio portal',
            e_paste: 'notes and texts',
            e_url: 'short links',
            e_status: 'monitoring',
            e_keys: 'SSH and PGP keys',
            e_proof: 'signed identity',
            e_restricted: 'a puzzle',
            f_proof: 'Proof of ownership',
            f_keys: 'PGP and SSH keys'
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
        document.querySelectorAll('time.fdate[datetime]').forEach(el => {
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
        document.title = i18n[lang].doc_title;
        $('#btn-search').title = i18n[lang].search_hint;
        $('#btn-pt').setAttribute('aria-pressed', String(lang === 'pt'));
        $('#btn-en').setAttribute('aria-pressed', String(lang === 'en'));
        formatDates(lang);
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

    // ── Toast + clipboard ──
    let toastTimer;
    function toast(msg) {
        const el = $('#toast');
        el.textContent = msg;
        el.classList.add('show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => el.classList.remove('show'), 3200);
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
    $('#email-text').textContent = email;
    $('#email-copy').addEventListener('click', () => copy(email));

    const fingerprint = '48E73F6FA2871E7B86EFEA648EC4329A369B7B33';

    // "Galerias recentes" comes from fotos.lucafchala.com/api/recentes, so a new
    // project shows up here without editing this HTML. The list in index.html
    // is the fallback (no JS, offline, fotos down): it's only replaced when the
    // response has at least one valid item. Titles arrive in PT and stay PT in
    // EN mode, like the text status serves.
    function loadGalleries() {
        const list = document.querySelector('.recent');
        if (!list || !window.fetch) return;
        fetch('https://fotos.lucafchala.com/api/recentes', { credentials: 'omit' })
            .then(r => (r.ok ? r.json() : null))
            .then(p => {
                const items = (p && Array.isArray(p.galerias) ? p.galerias : []).filter(g =>
                    g && typeof g.slug === 'string' && /^[a-z0-9_-]+$/i.test(g.slug) &&
                    typeof g.titulo === 'string' && g.titulo.trim() &&
                    (g.data === null || (typeof g.data === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(g.data))) &&
                    // A homepage visitor should land on photos: "em breve" ones have none yet.
                    !g.emBreve
                ).slice(0, 3);
                if (!items.length) return;
                // Built from the validated slug, never the response's `url`:
                // nothing from outside becomes a link target.
                const href = (g) => 'https://fotos.lucafchala.com/' + g.slug;
                const frag = document.createDocumentFragment();
                items.forEach(g => {
                    const li = document.createElement('li');
                    const a = document.createElement('a');
                    a.href = href(g);
                    a.target = '_blank';
                    a.rel = 'noopener';
                    a.setAttribute('aria-describedby', 'newtab');
                    const title = document.createElement('span');
                    title.className = 't';
                    title.textContent = g.titulo.trim();
                    const time = document.createElement('time');
                    time.className = 'fdate';
                    if (g.data) time.setAttribute('datetime', g.data);
                    a.append(title, time);
                    li.appendChild(a);
                    frag.appendChild(li);
                });
                list.replaceChildren(frag);

                formatDates(root.dataset.lang || 'pt');
            })
            .catch(() => {});
    }

    // ── Init preferences ──
    const savedLang = store.get('lang');
    const initialLang = savedLang || ((navigator.language || 'pt').toLowerCase().startsWith('pt') ? 'pt' : 'en');
    setLang(initialLang, false);
    // After first paint: the gallery list is an extra, never worth delaying the page.
    const afterLoad = () => { loadGalleries(); };
    if (document.readyState === 'complete') afterLoad(); else window.addEventListener('load', afterLoad, { once: true });

    // Controls (listeners instead of inline onclick so the CSP can drop 'unsafe-inline')
    $('#btn-pt').addEventListener('click', () => setLang('pt', true));
    $('#btn-en').addEventListener('click', () => setLang('en', true));
    $('#btn-theme').addEventListener('click', toggleTheme);


    // Print the "Outros canais" too; it's the only collapsed thing left on the page.
    (function () {
        let closed = [];
        window.addEventListener('beforeprint', () => {
            closed = [...document.querySelectorAll('details.others')].filter(d => !d.open);
            closed.forEach(d => { d.open = true; });
        });
        window.addEventListener('afterprint', () => { closed.forEach(d => { d.open = false; }); closed = []; });
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
                // Every link component names its title `.t`; plain links use their text.
                let label = clean((a.querySelector('.t') || a).textContent);
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
            if ((e.key === 'ArrowDown' || e.key === 'ArrowUp') && !shown.length) { e.preventDefault(); }
            else if (e.key === 'ArrowDown') { e.preventDefault(); active = Math.min(active + 1, shown.length - 1); mark(); }
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
        else if (e.key === '?') toast(t('shortcuts_hint'));
        else if (e.key === 't' || e.key === 'T') toggleTheme();
        else if (e.key === 'l' || e.key === 'L') setLang(root.dataset.lang === 'pt' ? 'en' : 'pt', true);
    });

    // ── Hidden: DevTools console signature ──
    console.log(
        '%c  )) ))) )))  %cPU2XIK%c\n\n' +
        'CQ CQ DE PU2XIK\n' +
        'Student · Photographer · Amateur radio operator\n' +
        'São Paulo, BR, github.com/lucafchala\n' +
        'Psst: try / or ⌘K.',
        'color:#c0a060;font-family:monospace;font-size:11px;',
        'background:#c0a060;color:#0a0a0a;font-weight:bold;padding:2px 7px;border-radius:2px;font-family:monospace;font-size:12px;',
        'color:#c0a060;font-family:monospace;font-size:12px;line-height:1.6;'
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

    // ── WebMCP: expose page actions to AI agents, feature-detected ──
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
                            projects: ['Photo gallery with privacy', 'Homelab and monitoring', 'T-Embed curation'],
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

