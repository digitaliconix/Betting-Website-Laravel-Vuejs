export default [
    {
        path: '/teams-nba',
        name: 'view-teams-nba',
        component: () => import('../views/Team/nba_index'),
        meta: {
            pageTitle: 'Home',
            breadcrumb: [
                {
                    text: 'Teams',
                    active: true,
                },
            ],
        },
    },
    {
        path: '/teams-nfl',
        name: 'view-teams-nfl',
        component: () => import('../views/Team/nfl_index'),
        meta: {
            pageTitle: 'Home',
            breadcrumb: [
                {
                    text: 'Teams',
                    active: true,
                },
            ],
        },
    },
    {
        path: '/teams-mlb',
        name: 'view-teams-mlb',
        component: () => import('../views/Team/mlb_index'),
        meta: {
            pageTitle: 'Home',
            breadcrumb: [
                {
                    text: 'Teams',
                    active: true,
                },
            ],
        },
    },
    {
        path: '/teams/create',
        name: 'create-teams',
        component: () => import('../views/Team/form'),
        meta: {
            pageTitle: 'Team',
            breadcrumb: [
                {
                    text: 'Team Create',
                    active: true,
                },
            ],
        },
    },
    {
        path: '/teams/:id/edit',
        name: 'edit-teams',
        component: () => import('../views/Team/form'),
        meta: {
            mode: 'edit',
            pageTitle: 'Team',
            breadcrumb: [
                {
                    text: 'Team Detail',
                    active: true,
                },
            ],
        },
    },
]
