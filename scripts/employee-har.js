/*
 * Creator: Firefox 148.0.2
 * Browser: Firefox 148.0.2
 */

import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = {}

export default function main() {
  let response

  group('page_1 - https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', function () {
    response = http.get('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {
      headers: {
        Host: 'opensource-demo.orangehrmlive.com',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        Connection: 'keep-alive',
        'Upgrade-Insecure-Requests': '1',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'none',
        'Sec-Fetch-User': '?1',
        Priority: 'u=0, i',
      },
    })

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          contentType: 'application/json',
          'If-None-Match': '"udPzp5tmK1qJ8SD5ih5TmI9iNvVEpV1lqd0luA2ddBE="',
          Connection: 'keep-alive',
          Referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
          Cookie: 'orangehrm=922etunid6s23juelpec6sb48o',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Pragma: 'no-cache',
          'Cache-Control': 'no-cache',
        },
      }
    )

    response = http.post(
      'https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate',
      {
        _token:
          '39be11d1a6ac000791f23bee5a21.-2TpG1kQDO9vJ7CERx2tSoPbqBCpQVCu7L4SL_Dj47g.sAmDehQhS4cKQN3ndHTpGciM7Uf2FD_clcdUGbiXpMGYUaYua35qiycK0w',
        username: 'Admin',
        password: 'admin123',
      },
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Content-Type': 'application/x-www-form-urlencoded',
          Origin: 'https://opensource-demo.orangehrmlive.com',
          Connection: 'keep-alive',
          Referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
          Cookie: 'orangehrm=922etunid6s23juelpec6sb48o',
          'Upgrade-Insecure-Requests': '1',
          'Sec-Fetch-Dest': 'document',
          'Sec-Fetch-Mode': 'navigate',
          'Sec-Fetch-Site': 'same-origin',
          'Sec-Fetch-User': '?1',
          Priority: 'u=0, i',
          Pragma: 'no-cache',
          'Cache-Control': 'no-cache',
        },
      }
    )

    response = http.get('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index', {
      headers: {
        Host: 'opensource-demo.orangehrmlive.com',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        Referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
        Connection: 'keep-alive',
        Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
        'Upgrade-Insecure-Requests': '1',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-User': '?1',
        Priority: 'u=0, i',
        Pragma: 'no-cache',
        'Cache-Control': 'no-cache',
      },
    })

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          contentType: 'application/json',
          'If-None-Match': '"udPzp5tmK1qJ8SD5ih5TmI9iNvVEpV1lqd0luA2ddBE="',
          Connection: 'keep-alive',
          Referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Pragma: 'no-cache',
          'Cache-Control': 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/time-at-work?timezoneOffset=1&currentDate=2026-03-17&currentTime=14:11',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Cache-Control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
          Connection: 'keep-alive',
          Referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Pragma: 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Cache-Control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
          Connection: 'keep-alive',
          Referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Pragma: 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/shortcuts',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Cache-Control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
          Connection: 'keep-alive',
          Referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Pragma: 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/buzz/feed?limit=5&offset=0&sortOrder=DESC&sortField=share.createdAtUtc',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json, text/plain, */*',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          Connection: 'keep-alive',
          Referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Pragma: 'no-cache',
          'Cache-Control': 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/leaves?date=2026-03-17',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Cache-Control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
          Connection: 'keep-alive',
          Referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Pragma: 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/subunit',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Cache-Control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
          Connection: 'keep-alive',
          Referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Pragma: 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/locations',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Cache-Control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
          Connection: 'keep-alive',
          Referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Pragma: 'no-cache',
        },
      }
    )

    response = http.post(
      'https://opensource-demo.orangehrmlive.com/web/index.php/events/push',
      null,
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          Origin: 'https://opensource-demo.orangehrmlive.com',
          Connection: 'keep-alive',
          Referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Pragma: 'no-cache',
          'Cache-Control': 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPhoto/empNumber/7',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'image/avif,image/webp,image/png,image/svg+xml,image/*;q=0.8,*/*;q=0.5',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          Connection: 'keep-alive',
          Referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'image',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Site': 'same-origin',
          Priority: 'u=4, i',
          Pragma: 'no-cache',
          'Cache-Control': 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPhoto/empNumber/22',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'image/avif,image/webp,image/png,image/svg+xml,image/*;q=0.8,*/*;q=0.5',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          Connection: 'keep-alive',
          Referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'image',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Site': 'same-origin',
          Priority: 'u=4, i',
          Pragma: 'no-cache',
          'Cache-Control': 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPhoto/empNumber/11',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'image/avif,image/webp,image/png,image/svg+xml,image/*;q=0.8,*/*;q=0.5',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          Connection: 'keep-alive',
          Referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'image',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Site': 'same-origin',
          Priority: 'u=5, i',
          Pragma: 'no-cache',
          'Cache-Control': 'no-cache',
        },
      }
    )

    response = http.get('https://opensource-demo.orangehrmlive.com/web/index.php/buzz/photo/9', {
      headers: {
        Host: 'opensource-demo.orangehrmlive.com',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
        Accept: 'image/avif,image/webp,image/png,image/svg+xml,image/*;q=0.8,*/*;q=0.5',
        'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        Connection: 'keep-alive',
        Referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
        Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
        'Sec-Fetch-Dest': 'image',
        'Sec-Fetch-Mode': 'no-cors',
        'Sec-Fetch-Site': 'same-origin',
        Priority: 'u=5, i',
        Pragma: 'no-cache',
        'Cache-Control': 'no-cache',
      },
    })

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPhoto/empNumber/9',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'image/avif,image/webp,image/png,image/svg+xml,image/*;q=0.8,*/*;q=0.5',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          Connection: 'keep-alive',
          Referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'image',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Site': 'same-origin',
          Priority: 'u=5, i',
          Pragma: 'no-cache',
          'Cache-Control': 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPimModule',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          Connection: 'keep-alive',
          Referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Upgrade-Insecure-Requests': '1',
          'Sec-Fetch-Dest': 'document',
          'Sec-Fetch-Mode': 'navigate',
          'Sec-Fetch-Site': 'same-origin',
          'Sec-Fetch-User': '?1',
          Priority: 'u=0, i',
          Pragma: 'no-cache',
          'Cache-Control': 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          Referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index',
          Connection: 'keep-alive',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Upgrade-Insecure-Requests': '1',
          'Sec-Fetch-Dest': 'document',
          'Sec-Fetch-Mode': 'navigate',
          'Sec-Fetch-Site': 'same-origin',
          'Sec-Fetch-User': '?1',
          Priority: 'u=0, i',
          Pragma: 'no-cache',
          'Cache-Control': 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          contentType: 'application/json',
          'If-None-Match': '"udPzp5tmK1qJ8SD5ih5TmI9iNvVEpV1lqd0luA2ddBE="',
          Connection: 'keep-alive',
          Referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Pragma: 'no-cache',
          'Cache-Control': 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPhoto/empNumber/7',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'image/avif,image/webp,image/png,image/svg+xml,image/*;q=0.8,*/*;q=0.5',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          Connection: 'keep-alive',
          Referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'image',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Site': 'same-origin',
          Priority: 'u=4, i',
          Pragma: 'no-cache',
          'Cache-Control': 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Cache-Control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
          Connection: 'keep-alive',
          Referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Pragma: 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/employment-statuses?limit=0',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Cache-Control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
          Connection: 'keep-alive',
          Referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Pragma: 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/job-titles?limit=0',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Cache-Control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
          Connection: 'keep-alive',
          Referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Pragma: 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/subunits',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Cache-Control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
          Connection: 'keep-alive',
          Referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Pragma: 'no-cache',
        },
      }
    )

    response = http.get('https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee', {
      headers: {
        Host: 'opensource-demo.orangehrmlive.com',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        Connection: 'keep-alive',
        Referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
        Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
        'Upgrade-Insecure-Requests': '1',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-User': '?1',
        Priority: 'u=0, i',
        Pragma: 'no-cache',
        'Cache-Control': 'no-cache',
      },
    })

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          contentType: 'application/json',
          'If-None-Match': '"udPzp5tmK1qJ8SD5ih5TmI9iNvVEpV1lqd0luA2ddBE="',
          Connection: 'keep-alive',
          Referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Pragma: 'no-cache',
          'Cache-Control': 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPhoto/empNumber/7',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'image/avif,image/webp,image/png,image/svg+xml,image/*;q=0.8,*/*;q=0.5',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          Connection: 'keep-alive',
          Referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'image',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Site': 'same-origin',
          Priority: 'u=4, i',
          Pragma: 'no-cache',
          'Cache-Control': 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Cache-Control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
          Connection: 'keep-alive',
          Referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Pragma: 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/core/validation/unique?value=123654&entityName=Employee&attributeName=employeeId',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json, text/plain, */*',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          Connection: 'keep-alive',
          Referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Pragma: 'no-cache',
          'Cache-Control': 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/core/validation/unique?value=123654&entityName=Employee&attributeName=employeeId',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json, text/plain, */*',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          Connection: 'keep-alive',
          Referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Pragma: 'no-cache',
          'Cache-Control': 'no-cache',
        },
      }
    )

    response = http.post(
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees',
      '{"firstName":"K6","middleName":"","lastName":"Training","empPicture":null,"employeeId":"123654"}',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Content-Type': 'application/json',
          Origin: 'https://opensource-demo.orangehrmlive.com',
          Connection: 'keep-alive',
          Referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Pragma: 'no-cache',
          'Cache-Control': 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/255',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          Connection: 'keep-alive',
          Referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Upgrade-Insecure-Requests': '1',
          'Sec-Fetch-Dest': 'document',
          'Sec-Fetch-Mode': 'navigate',
          'Sec-Fetch-Site': 'same-origin',
          Priority: 'u=0, i',
          Pragma: 'no-cache',
          'Cache-Control': 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          contentType: 'application/json',
          'If-None-Match': '"udPzp5tmK1qJ8SD5ih5TmI9iNvVEpV1lqd0luA2ddBE="',
          Connection: 'keep-alive',
          Referer:
            'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/255',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Pragma: 'no-cache',
          'Cache-Control': 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPhoto/empNumber/7',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'image/avif,image/webp,image/png,image/svg+xml,image/*;q=0.8,*/*;q=0.5',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          Connection: 'keep-alive',
          Referer:
            'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/255',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'image',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Site': 'same-origin',
          Priority: 'u=4, i',
          Pragma: 'no-cache',
          'Cache-Control': 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPhoto/empNumber/255',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'image/avif,image/webp,image/png,image/svg+xml,image/*;q=0.8,*/*;q=0.5',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          Connection: 'keep-alive',
          Referer:
            'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/255',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'image',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Site': 'same-origin',
          Priority: 'u=4, i',
          Pragma: 'no-cache',
          'Cache-Control': 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees/255/personal-details',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Cache-Control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
          Connection: 'keep-alive',
          Referer:
            'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/255',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Pragma: 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees/255',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json, text/plain, */*',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          Connection: 'keep-alive',
          Referer:
            'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/255',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Pragma: 'no-cache',
          'Cache-Control': 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/leave/workweek?model=indexed',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json, text/plain, */*',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          Connection: 'keep-alive',
          Referer:
            'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/255',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Pragma: 'no-cache',
          'Cache-Control': 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/leave/workweek?model=indexed',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json, text/plain, */*',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          Connection: 'keep-alive',
          Referer:
            'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/255',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Pragma: 'no-cache',
          'Cache-Control': 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees/255/custom-fields?screen=personal',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Cache-Control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
          Connection: 'keep-alive',
          Referer:
            'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/255',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Pragma: 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees/255/screen/personal/attachments?limit=50&offset=0',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Cache-Control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
          Connection: 'keep-alive',
          Referer:
            'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/255',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Pragma: 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/leave/holidays?fromDate=2026-01-01&toDate=2026-12-31',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json, text/plain, */*',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          Connection: 'keep-alive',
          Referer:
            'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/255',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Pragma: 'no-cache',
          'Cache-Control': 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/leave/holidays?fromDate=2026-01-01&toDate=2026-12-31',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json, text/plain, */*',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          Connection: 'keep-alive',
          Referer:
            'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/255',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Pragma: 'no-cache',
          'Cache-Control': 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json, text/plain, */*',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          Connection: 'keep-alive',
          Referer:
            'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/255',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Pragma: 'no-cache',
          'Cache-Control': 'no-cache',
        },
      }
    )

    response = http.put(
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees/255/personal-details',
      '{"lastName":"Training","firstName":"K6","middleName":"","employeeId":"123654","otherId":"","drivingLicenseNo":"","drivingLicenseExpiredDate":null,"gender":"1","maritalStatus":"Single","birthday":"1986-02-11","nationalityId":64}',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json, text/plain, */*',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Content-Type': 'application/json',
          Origin: 'https://opensource-demo.orangehrmlive.com',
          Connection: 'keep-alive',
          Referer:
            'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/255',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Pragma: 'no-cache',
          'Cache-Control': 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPimModule',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          Connection: 'keep-alive',
          Referer:
            'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/255',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Upgrade-Insecure-Requests': '1',
          'Sec-Fetch-Dest': 'document',
          'Sec-Fetch-Mode': 'navigate',
          'Sec-Fetch-Site': 'same-origin',
          'Sec-Fetch-User': '?1',
          Priority: 'u=0, i',
          Pragma: 'no-cache',
          'Cache-Control': 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          Referer:
            'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/255',
          Connection: 'keep-alive',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Upgrade-Insecure-Requests': '1',
          'Sec-Fetch-Dest': 'document',
          'Sec-Fetch-Mode': 'navigate',
          'Sec-Fetch-Site': 'same-origin',
          'Sec-Fetch-User': '?1',
          Priority: 'u=0, i',
          Pragma: 'no-cache',
          'Cache-Control': 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          contentType: 'application/json',
          'If-None-Match': '"udPzp5tmK1qJ8SD5ih5TmI9iNvVEpV1lqd0luA2ddBE="',
          Connection: 'keep-alive',
          Referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Pragma: 'no-cache',
          'Cache-Control': 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPhoto/empNumber/7',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'image/avif,image/webp,image/png,image/svg+xml,image/*;q=0.8,*/*;q=0.5',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          Connection: 'keep-alive',
          Referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'image',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Site': 'same-origin',
          Priority: 'u=4, i',
          Pragma: 'no-cache',
          'Cache-Control': 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Cache-Control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
          Connection: 'keep-alive',
          Referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Pragma: 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/employment-statuses?limit=0',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Cache-Control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
          Connection: 'keep-alive',
          Referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Pragma: 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/job-titles?limit=0',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Cache-Control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
          Connection: 'keep-alive',
          Referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Pragma: 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/subunits',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Cache-Control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
          Connection: 'keep-alive',
          Referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Pragma: 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?nameOrId=K&includeEmployees=onlyCurrent',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Cache-Control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
          Connection: 'keep-alive',
          Referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Pragma: 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?nameOrId=K6&includeEmployees=onlyCurrent',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Cache-Control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
          Connection: 'keep-alive',
          Referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Pragma: 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&nameOrId=K6&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Cache-Control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
          Connection: 'keep-alive',
          Referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Pragma: 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/255',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          Connection: 'keep-alive',
          Referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Upgrade-Insecure-Requests': '1',
          'Sec-Fetch-Dest': 'document',
          'Sec-Fetch-Mode': 'navigate',
          'Sec-Fetch-Site': 'same-origin',
          'Sec-Fetch-User': '?1',
          Priority: 'u=0, i',
          Pragma: 'no-cache',
          'Cache-Control': 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          contentType: 'application/json',
          'If-None-Match': '"udPzp5tmK1qJ8SD5ih5TmI9iNvVEpV1lqd0luA2ddBE="',
          Connection: 'keep-alive',
          Referer:
            'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/255',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Pragma: 'no-cache',
          'Cache-Control': 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPhoto/empNumber/7',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'image/avif,image/webp,image/png,image/svg+xml,image/*;q=0.8,*/*;q=0.5',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          Connection: 'keep-alive',
          Referer:
            'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/255',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'image',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Site': 'same-origin',
          Priority: 'u=4, i',
          Pragma: 'no-cache',
          'Cache-Control': 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPhoto/empNumber/255',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'image/avif,image/webp,image/png,image/svg+xml,image/*;q=0.8,*/*;q=0.5',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          Connection: 'keep-alive',
          Referer:
            'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/255',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'image',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Site': 'same-origin',
          Priority: 'u=4, i',
          Pragma: 'no-cache',
          'Cache-Control': 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees/255/personal-details',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Cache-Control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
          Connection: 'keep-alive',
          Referer:
            'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/255',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Pragma: 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees/255',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json, text/plain, */*',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          Connection: 'keep-alive',
          Referer:
            'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/255',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Pragma: 'no-cache',
          'Cache-Control': 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/leave/workweek?model=indexed',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json, text/plain, */*',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          Connection: 'keep-alive',
          Referer:
            'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/255',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Pragma: 'no-cache',
          'Cache-Control': 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/leave/workweek?model=indexed',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json, text/plain, */*',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          Connection: 'keep-alive',
          Referer:
            'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/255',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Pragma: 'no-cache',
          'Cache-Control': 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees/255/custom-fields?screen=personal',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Cache-Control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
          Connection: 'keep-alive',
          Referer:
            'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/255',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Pragma: 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees/255/screen/personal/attachments?limit=50&offset=0',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Cache-Control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
          Connection: 'keep-alive',
          Referer:
            'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/255',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Pragma: 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/leave/holidays?fromDate=2026-01-01&toDate=2026-12-31',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json, text/plain, */*',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          Connection: 'keep-alive',
          Referer:
            'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/255',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Pragma: 'no-cache',
          'Cache-Control': 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/leave/holidays?fromDate=2026-01-01&toDate=2026-12-31',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json, text/plain, */*',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          Connection: 'keep-alive',
          Referer:
            'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/255',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Pragma: 'no-cache',
          'Cache-Control': 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json, text/plain, */*',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          Connection: 'keep-alive',
          Referer:
            'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/255',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Pragma: 'no-cache',
          'Cache-Control': 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/pim/contactDetails/empNumber/255',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          Connection: 'keep-alive',
          Referer:
            'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/255',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Upgrade-Insecure-Requests': '1',
          'Sec-Fetch-Dest': 'document',
          'Sec-Fetch-Mode': 'navigate',
          'Sec-Fetch-Site': 'same-origin',
          'Sec-Fetch-User': '?1',
          Priority: 'u=0, i',
          Pragma: 'no-cache',
          'Cache-Control': 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          contentType: 'application/json',
          'If-None-Match': '"udPzp5tmK1qJ8SD5ih5TmI9iNvVEpV1lqd0luA2ddBE="',
          Connection: 'keep-alive',
          Referer:
            'https://opensource-demo.orangehrmlive.com/web/index.php/pim/contactDetails/empNumber/255',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Pragma: 'no-cache',
          'Cache-Control': 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employee/255/contact-details',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Cache-Control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
          Connection: 'keep-alive',
          Referer:
            'https://opensource-demo.orangehrmlive.com/web/index.php/pim/contactDetails/empNumber/255',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Pragma: 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees/255',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json, text/plain, */*',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          Connection: 'keep-alive',
          Referer:
            'https://opensource-demo.orangehrmlive.com/web/index.php/pim/contactDetails/empNumber/255',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Pragma: 'no-cache',
          'Cache-Control': 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPhoto/empNumber/7',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'image/avif,image/webp,image/png,image/svg+xml,image/*;q=0.8,*/*;q=0.5',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          Connection: 'keep-alive',
          Referer:
            'https://opensource-demo.orangehrmlive.com/web/index.php/pim/contactDetails/empNumber/255',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'image',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Site': 'same-origin',
          Priority: 'u=4, i',
          Pragma: 'no-cache',
          'Cache-Control': 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees/255/custom-fields?screen=contact',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Cache-Control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
          Connection: 'keep-alive',
          Referer:
            'https://opensource-demo.orangehrmlive.com/web/index.php/pim/contactDetails/empNumber/255',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Pragma: 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPhoto/empNumber/255',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'image/avif,image/webp,image/png,image/svg+xml,image/*;q=0.8,*/*;q=0.5',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          Connection: 'keep-alive',
          Referer:
            'https://opensource-demo.orangehrmlive.com/web/index.php/pim/contactDetails/empNumber/255',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'image',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Site': 'same-origin',
          Priority: 'u=4, i',
          Pragma: 'no-cache',
          'Cache-Control': 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees/255/screen/contact/attachments?limit=50&offset=0',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Cache-Control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
          Connection: 'keep-alive',
          Referer:
            'https://opensource-demo.orangehrmlive.com/web/index.php/pim/contactDetails/empNumber/255',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Pragma: 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees/255/contact-details/validation/work-emails?workEmail=k6.training%40demo.test',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json, text/plain, */*',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          Connection: 'keep-alive',
          Referer:
            'https://opensource-demo.orangehrmlive.com/web/index.php/pim/contactDetails/empNumber/255',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Pragma: 'no-cache',
          'Cache-Control': 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees/255/contact-details/validation/work-emails?workEmail=k6.training%40demo.test',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json, text/plain, */*',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          Connection: 'keep-alive',
          Referer:
            'https://opensource-demo.orangehrmlive.com/web/index.php/pim/contactDetails/empNumber/255',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Pragma: 'no-cache',
          'Cache-Control': 'no-cache',
        },
      }
    )

    response = http.put(
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employee/255/contact-details',
      '{"street1":"29 RUE DES SABLONS","street2":"","city":"PARIS","province":"PARIS","countryCode":"FR","zipCode":"75008","homeTelephone":"0145464748","workTelephone":null,"mobile":"0611223344","workEmail":"k6.training@demo.test","otherEmail":null}',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json, text/plain, */*',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Content-Type': 'application/json',
          Origin: 'https://opensource-demo.orangehrmlive.com',
          Connection: 'keep-alive',
          Referer:
            'https://opensource-demo.orangehrmlive.com/web/index.php/pim/contactDetails/empNumber/255',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Pragma: 'no-cache',
          'Cache-Control': 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPimModule',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          Connection: 'keep-alive',
          Referer:
            'https://opensource-demo.orangehrmlive.com/web/index.php/pim/contactDetails/empNumber/255',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Upgrade-Insecure-Requests': '1',
          'Sec-Fetch-Dest': 'document',
          'Sec-Fetch-Mode': 'navigate',
          'Sec-Fetch-Site': 'same-origin',
          'Sec-Fetch-User': '?1',
          Priority: 'u=0, i',
          Pragma: 'no-cache',
          'Cache-Control': 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          Referer:
            'https://opensource-demo.orangehrmlive.com/web/index.php/pim/contactDetails/empNumber/255',
          Connection: 'keep-alive',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Upgrade-Insecure-Requests': '1',
          'Sec-Fetch-Dest': 'document',
          'Sec-Fetch-Mode': 'navigate',
          'Sec-Fetch-Site': 'same-origin',
          'Sec-Fetch-User': '?1',
          Priority: 'u=0, i',
          Pragma: 'no-cache',
          'Cache-Control': 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          contentType: 'application/json',
          'If-None-Match': '"udPzp5tmK1qJ8SD5ih5TmI9iNvVEpV1lqd0luA2ddBE="',
          Connection: 'keep-alive',
          Referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Pragma: 'no-cache',
          'Cache-Control': 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPhoto/empNumber/7',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'image/avif,image/webp,image/png,image/svg+xml,image/*;q=0.8,*/*;q=0.5',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          Connection: 'keep-alive',
          Referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'image',
          'Sec-Fetch-Mode': 'no-cors',
          'Sec-Fetch-Site': 'same-origin',
          Priority: 'u=4, i',
          Pragma: 'no-cache',
          'Cache-Control': 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Cache-Control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
          Connection: 'keep-alive',
          Referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Pragma: 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/employment-statuses?limit=0',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Cache-Control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
          Connection: 'keep-alive',
          Referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Pragma: 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/job-titles?limit=0',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Cache-Control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
          Connection: 'keep-alive',
          Referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Pragma: 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/subunits',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Cache-Control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
          Connection: 'keep-alive',
          Referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Pragma: 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&employeeId=123654&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Cache-Control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
          Connection: 'keep-alive',
          Referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Pragma: 'no-cache',
        },
      }
    )

    response = http.del(
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees',
      '{"ids":[255]}',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json, text/plain, */*',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Content-Type': 'application/json',
          Origin: 'https://opensource-demo.orangehrmlive.com',
          Connection: 'keep-alive',
          Referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Priority: 'u=0',
          Pragma: 'no-cache',
          'Cache-Control': 'no-cache',
        },
      }
    )

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&employeeId=123654&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          'Cache-Control': 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0',
          Connection: 'keep-alive',
          Referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
          Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Pragma: 'no-cache',
        },
      }
    )

    response = http.get('https://opensource-demo.orangehrmlive.com/web/index.php/auth/logout', {
      headers: {
        Host: 'opensource-demo.orangehrmlive.com',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        Connection: 'keep-alive',
        Referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
        Cookie: 'orangehrm=eu9156ci5ivilshfq1lrgj474c',
        'Upgrade-Insecure-Requests': '1',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-User': '?1',
        Priority: 'u=0, i',
        Pragma: 'no-cache',
        'Cache-Control': 'no-cache',
      },
    })

    response = http.get('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {
      headers: {
        Host: 'opensource-demo.orangehrmlive.com',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        Referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList',
        Connection: 'keep-alive',
        Cookie: 'orangehrm=21jmq2mumq0lpu933hta4hgblf',
        'Upgrade-Insecure-Requests': '1',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-User': '?1',
        Priority: 'u=0, i',
        Pragma: 'no-cache',
        'Cache-Control': 'no-cache',
      },
    })

    response = http.get(
      'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages',
      {
        headers: {
          Host: 'opensource-demo.orangehrmlive.com',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0',
          Accept: 'application/json',
          'Accept-Language': 'fr-FR,en-US;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br, zstd',
          contentType: 'application/json',
          'If-None-Match': '"udPzp5tmK1qJ8SD5ih5TmI9iNvVEpV1lqd0luA2ddBE="',
          Connection: 'keep-alive',
          Referer: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
          Cookie: 'orangehrm=21jmq2mumq0lpu933hta4hgblf',
          'Sec-Fetch-Dest': 'empty',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Site': 'same-origin',
          Pragma: 'no-cache',
          'Cache-Control': 'no-cache',
        },
      }
    )
  })

  // Automatically added sleep
  sleep(1)
}
