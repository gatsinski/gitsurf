/* tslint:disable:no-unused-variable */
import {
  JsonpModule,
  Jsonp,
  BaseRequestOptions,
  Response,
  ResponseOptions,
  Http
} from "@angular/http";
import {TestBed, fakeAsync, tick} from '@angular/core/testing';
import {MockBackend} from "@angular/http/testing";
import {GitHubService} from './github';

describe('Service: Search', () => {

  let service: GitHubService;
  let backend: MockBackend;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [JsonpModule],
      providers: [
        GitHubService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Jsonp,
          useFactory: (backend, options) => new Jsonp(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        },
        {
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        }
      ]
    });

    // Get the MockBackend
    backend = TestBed.get(MockBackend);

    // Returns a service with the MockBackend so we can test with dummy responses
    service = TestBed.get(GitHubService);

  });

  it('should return issue details', fakeAsync(() => {
    let response = {
      'number': 100,
      'title': 'Issue title',
      'state': 'open',
    };

    // When the request subscribes for results on a connection, return a fake response
    backend.connections.subscribe(connection => {
      connection.mockRespond(new Response(<ResponseOptions>{
        body: JSON.stringify(response)
      }));
    });

    // Perform a request and make sure we get the response we expect
    let result;
    service.getDetailsIssue('fakeurl').subscribe(
      data => {
        result = data.json();
        expect(result.number).toBe(100);
        expect(result.title).toBe('Issue title');
        expect(result.state).toBe('open');
    });
  }));

  it('should return search results', fakeAsync(() => {
    let response = {
      'total_count': 1,
      'items': [{
          'number': 100,
          'title': 'Issue title',
          'state': 'open',
      }]
    };

    // When the request subscribes for results on a connection, return a fake response
    backend.connections.subscribe(connection => {
      connection.mockRespond(new Response(<ResponseOptions>{
        body: JSON.stringify(response)
      }));
    });

    // Perform a request and make sure we get the response we expect
    let result;
    service.search('issues', 'Search terms with intervals', 'sorting', 'ordering').subscribe(
      data => {
        result = data.json();
        expect(result.total_count).toBe(1);
        expect(result.items[0].number).toBe(100);
        expect(result.items[0].title).toBe('Issue title');
        expect(result.items[0].state).toBe('open');
    });
  }));
});
